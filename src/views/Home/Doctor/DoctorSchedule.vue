<template>
    <div className="h-full border-r-[1px] border-solid border-red-500">
        <div className="all-schedule">
            <select v-model="date" class="py-3 text-[#45c3d2] font-semibold outline-none" @change="onChange">
                <option class="cursor-pointer" v-for="item in allDays" :key="item.id" :value="item.value">
                    {{ item.label }}
                </option>
            </select>
        </div>
        <div className="">
            <div className="flex">
                <font-awesome-icon class="text-3xl mr-1" :icon="['fas', 'calendar-days']" />
                <span> Lịch khám </span>
            </div>
            <div className="mt-3">
                <div v-if="dataScheduleDoctor">
                    <div className="flex gap-4 flex-wrap">
                        <button
                        @click="handleBtn(item)"
                            v-for="item in dataScheduleDoctor"
                            :key="item.id"
                            class="min-w-[120px] px-3 py-[6px] bg-[#fff04b] rounded font-semibold text-[#333] hover:bg-[#45c3d2]"
                        >
                            <p v-if="local === 'vn'">{{ item.timeTypeData.valueVi }}</p>
                            <p v-else>{{ item.timeTypeData.valueEn }}</p>
                        </button>
                    </div>
                    <div className="mt-3">
                        <span>
                            chọn <font-awesome-icon :icon="['far', 'hand-point-up']" /> và đặt (Phí đặt lịch 0đ)
                        </span>
                    </div>
                </div>
                <div v-else className="no-schedule">
                    không có lịch hẹn trong thời gian này , vui lòng chọn thời gian khác
                </div>
            </div>
        </div>
    </div>
    <bookingModal  :dataDate="date" :chosseDate="chosseDate"/> 
</template>

<script>
import i18n from '@/language/i18n';
import moment from 'moment';
import { ref, computed , watch ,inject} from 'vue';
import useDoctorSchedule from '@/services/apiDoctorSchedule';
import { useRoute } from 'vue-router';
import bookingModal from './bookingModal.vue';

export default {

    setup() {
        const emitter = inject('emitter'); 

       const isShowModal = ref(false)
        const route = useRoute();
        const local = computed(() => i18n.global.locale);
        const date = ref(moment(new Date()).add(0, 'days').startOf('day').valueOf());
        const capitalizeFirstLetter = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
        };
        const chosseDate = ref('')
        const getArrDays = (language) => {
            console.log('check', language);
            let allDays = [];
            for (let i = 0; i < 7; i++) {
                let object = {};
                if (language === 'vn') {
                    if (i === 0) {
                        let DDMM = moment(new Date()).format('DD/MM');
                        let today = `hôm nay-${DDMM}`;
                        object.label = today;
                    } else {
                        let labelVi = (object.label = moment(new Date()).add(i, 'days').format('dddd - DD/MM'));
                        object.label = capitalizeFirstLetter(labelVi);
                    }
                } else {
                    if (i === 0) {
                        let DDMM = moment(new Date()).format('DD/MM');
                        let today = `Today-${DDMM}`;
                        object.label = today;
                    } else {
                        object.label = moment(new Date()).add(i, 'days').locale('en').format('dddd - DD/MM');
                    }
                }
                object.value = moment(new Date()).add(i, 'days').startOf('day').valueOf();

                allDays.push(object);
            }
            console.log('check', allDays);
            return allDays;
        };
        const allDays = ref([]);
        const updateDays = () => {
            allDays.value = getArrDays(local.value);
        };
        watch(local, () => {
            updateDays();
        });

        updateDays();

        // /////////////////
        const { fetchScheduleDoctor } = useDoctorSchedule();
        const dataScheduleDoctor = ref('');
        async function onChange(event) {
            console.log(event.target.value);
            // Do something with the selected value
                            getData({doctorId : route.params.id , date : date.value})
        }
        const getData = async ({doctorId , date}) => {
            const res = await fetchScheduleDoctor({ doctorId: doctorId, date: date });
            if (res && res.infor.errCode === 0) {
                dataScheduleDoctor.value = res.infor.data;
            }
        }
        const handleBtn = (data) => {
            emitter.emit('handleModelBook', {
                chosseDate: data,
                dataDate : date.value
            });

        }
        getData({doctorId : route.params.id , date : date.value})

        return {
            local,
            allDays,
            isShowModal ,
            date,
            onChange,
            dataScheduleDoctor,
            handleBtn
        };
    },
    components: {
        bookingModal
    }
};
</script>

<style></style>

<template>
    <div className="pl-4">
        <div className="mb-3">
            <div className="uppercase">ĐỊA CHỈ KHÁM</div>
            <div className="py-2 font-semibold text-[#333]">{{ listData.nameClinic }}</div>
            <div className="font-semibold text-[#333]">{{ listData.addressClinic }}</div>
        </div>
        <div className="content-down">
            <div v-if="isShowDetaiInfor">
                <span className="content-down-priceText"> GIÁ KHÁM : </span>
                <span v-if="local === 'vn'" className="content-down-price"> {{ listData.priceData.valueVi }} vnd </span>
                <span v-else className="content-down-price"> {{ listData.priceData.valueEn }} vnd </span>

                <span @click="handleShow" className="ml-3 text-blue-600 cursor-pointer">Xem chi tiết</span>
            </div>

         <div v-else>
            <div  className="content-down-priceText">
                GÍA KHÁM:
                <span v-if="local === 'vn'" className="content-down-price"> {{ listData.priceData.valueVi }} vnd </span>
                <span v-else className="content-down-price"> {{ listData.priceData.valueEn }} vnd </span>
            </div>

            <div>được ưu tiên đặt khám quá booking care , giá khám cho người mới 250k</div>
            <div>người bệnh có thể thanh toán qua tiền mặt quẹt thẻ</div>
            <div @click="handleShow" className="ml-3 text-blue-600 cursor-pointer">Ẩn bảng giá</div>
             </div>
        </div>
    </div>
</template>

<script>
import useDoctor from '@/services/apiDetailDoctor';
import i18n from '@/language/i18n';
import { useRoute } from 'vue-router';

import { ref  , computed} from 'vue';
export default {
    setup() {
        const route = useRoute();

        const local = computed(() => i18n.global.locale);
        const { getExtraInforDoctorById } = useDoctor();
        const isShowDetaiInfor = ref(true);
        const listData = ref({
            nameClinic: '',
            addressClinic: '',
            priceData: {
                valueVi: '',
            },
        });
        const handleData = async () => {
            const res = await getExtraInforDoctorById(route.params.id);
            if (res && res.infor.errCode === 0) {
                listData.value = res.infor.data;
            }
        };
        const handleShow = () => {
            isShowDetaiInfor.value = !isShowDetaiInfor.value
        }
        handleData();

        return {
            listData,
            isShowDetaiInfor,
            handleShow,
            local
        };
    },
};
</script>

<style></style>

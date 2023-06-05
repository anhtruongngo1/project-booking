import axios from '../../axios';
import { ref } from 'vue';
export default function () {
    const listData = ref({});
    let errorData = ref('');
    let totalPage = ref(null)

    const fetchListPatient = async ({doctorId , date , statusId , page , size}) => {
        try {
            if (!statusId) {
                statusId = 'S2'
            }
            if (!page) {
                page = 0
            }
            if (!size) {
                size = 5
            }
            const res = await axios.get(`/api/get-list-patient-for-doctor?doctorId=${doctorId}&date=${date}&statusId=${statusId}&page=${page}&size=${size}`);

            if (res && res.errCode === 0) {
          
                listData.value = res.data.data;
                totalPage.value = res.data.totalPages

   
            } else {
                errorData.value = res.errMessage;
            }
            return res;
        } catch (err) {
            errorData.value = err;
        }
    };
    const confirmPatient = async (data) => {
        try {
            const res = await axios.post(`/api/send-remedy`,data);

            if (res && res.errCode === 0) {
          
                listData.value = res.data;
   
            } else {
                errorData.value = res.errMessage;
            }
            return res;
        } catch (err) {
            errorData.value = err;
        }
    };
    
    return { listData, errorData, fetchListPatient , confirmPatient , totalPage  };
}

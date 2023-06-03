import axios from '../../axios';
import { ref } from 'vue';
export default function () {
    const listData = ref({});
    let errorData = ref('');
    let totalPage = ref(null)
    const fetchListSpecial = async ({pageIndex}) => {
        try {
            if (!pageIndex) {
                pageIndex = 0
            }
            const res = await axios.get(`/api/get-all-specialty?page=${pageIndex}&size=6`);

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
    return { listData, errorData, fetchListSpecial  , totalPage };
}

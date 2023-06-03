<template>
   <div className="relative pt-[10px] bg-[url(https://res.cloudinary.com/dl0wt2mgx/image/upload/v1678100063/booking-care/header-background_gm24vt.jpg)] h-[100vh] bg-no-repeat bg-cover bg-center">
            <div className="text-3x items-center text-white drop-shadow-textop mt-56"></div>

            <div className="text-3xl text-center text-white drop-shadow-text">{{$t('homeheader.specialty') }}</div>
            <div className="flex items-center mx-auto w-[400px] justify-center p-2.5 rounded-sm bg-[#D0F0D8] ">
                <FontAwesomeIcon icon={faBars} />
                <input
                    type="text"
                    className="h-8 w-72 bg-transparent outline-none border-none text-xl"
                    placeholder="Tìm kiếm chuyên khoa" />
            </div>
            <ul className="absolute h-[50px] w-[70%] flex items-center text-center mx-auto bg-text bottom-[25%] left-0 right-0">
                <li className="h-full w-full flex flex-col items-center ">
                    <div className="bg-white w-[50px] rounded-[50px] h-full flex items-center justify-center  ">
                        <img
                            className="h-[80%]"
                            src="https://res.cloudinary.com/dl0wt2mgx/image/upload/v1678100874/booking-care/133537-khamchuyenkhoa_pyccta.png"
                            alt=""
                        />
                    </div>
                    <div className="text-base font-bold hover:color-[#A7E4EE] ">{{ $t('homeheader.ExaminationSpecialist') }}</div>
                </li>
                <li className="h-full w-full flex flex-col items-center ">
                    <div className="bg-white w-[50px] rounded-[50px] h-full flex items-center justify-center  ">
                        <img
                            className="h-[80%]"
                            src="https://res.cloudinary.com/dl0wt2mgx/image/upload/v1678100872/booking-care/133657-khamtuxa_b3msst.png"
                            alt=""
                        />
                    </div>
                    <div className="text-base font-bold hover:color-[#A7E4EE] ">{{ $t('homeheader.remoteexamination') }}</div>
                </li>
                <li className="h-full w-full flex flex-col items-center ">
                    <div className="bg-white w-[50px] rounded-[50px] h-full flex items-center justify-center  ">
                        <img
                            className="h-[80%]"
                            src="https://res.cloudinary.com/dl0wt2mgx/image/upload/v1678100870/booking-care/133744-khamtongquat_cs8kmx.png"
                            alt=""
                        />
                    </div>
                    <div className="text-base font-bold hover:color-[#A7E4EE] ">{{ $t('homeheader.generalexamination') }}</div>
                </li>
                <li className="h-full w-full flex flex-col items-center ">
                    <div className="bg-white w-[50px] rounded-[50px] h-full flex items-center justify-center  ">
                        <img
                            className="h-[80%]"
                            src="https://res.cloudinary.com/dl0wt2mgx/image/upload/v1678100869/booking-care/133744-dichvuxetnghiem_d25fru.png"
                            alt=""
                        />
                    </div>
                    <div className="text-base font-bold hover:color-[#A7E4EE] ">{{ $t('homeheader.medicaltest') }}</div>
                </li>
                <li className="h-full w-full flex flex-col items-center ">
                    <div className="bg-white w-[50px] rounded-[50px] h-full flex items-center justify-center  ">
                        <img
                            className="h-[80%]"
                            src="https://res.cloudinary.com/dl0wt2mgx/image/upload/v1678100867/booking-care/133744-suckhoetinhthan_eao9yj.png"
                            alt=""
                        />
                    </div>
                    <div className="text-base font-bold hover:color-[#A7E4EE] "> {{ $t('homeheader.mentalhealth') }}</div>
                </li>
                <li className="h-full w-full flex flex-col items-center ">
                    <div className="bg-white w-[50px] rounded-[50px] h-full flex items-center justify-center  ">
                        <img
                            className="h-[80%]"
                            src="https://res.cloudinary.com/dl0wt2mgx/image/upload/v1678100865/booking-care/104635-khamnhakhoa_kbxciz.png"
                            alt=""
                        />
                    </div>
                    <div className="text-base font-bold hover:color-[#A7E4EE] ">{{ $t('homeheader.dentalexamination') }}</div>
                </li>
                <li className="h-full w-full flex flex-col items-center ">
                    <div className="bg-white w-[50px] rounded-[50px] h-full flex items-center justify-center  ">
                        <img
                            className="h-[80%]"
                            src="https://res.cloudinary.com/dl0wt2mgx/image/upload/v1678100864/booking-care/151930-phau-thuat_ipe4jy.jpg"
                            alt=""
                        />
                    </div>
                    <div className="text-base font-bold hover:color-[#A7E4EE] ">{{ $t('homeheader.surgerypackage') }}</div>
                </li>
                <li className="h-full w-full flex flex-col items-center ">
                    <div className="mt-[14px] bg-white w-[50px] rounded-[50px] h-full flex items-center justify-center  ">
                        <img
                            className="h-[80%]"
                            src="https://res.cloudinary.com/dl0wt2mgx/image/upload/v1678100861/booking-care/133744-khamtainha_mcgjjr.png"
                            alt=""
                        />
                    </div>
                    <div className="text-base font-bold hover:color-[#A7E4EE] ">{{ $t('homeheader.medicalproducts')}}</div>
                </li>
                <li className="h-full w-full flex flex-col items-center ">
                    <div className="bg-white w-[50px] rounded-[50px] h-full flex items-center justify-center  ">
                        <img
                            className="h-[80%]"
                            src="https://res.cloudinary.com/dl0wt2mgx/image/upload/v1678100858/booking-care/101157-icon-lich-su_ubsi9v.jpg"
                            alt=""
                        />
                    </div>
                    <div className="text-base font-bold hover:color-[#A7E4EE] ">{{ $t('homeheader.Healthbusiness') }}</div>
                </li>
            </ul>
        </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
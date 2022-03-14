<style>
@import url(https://pro.fontawesome.com/releases/v5.10.0/css/all.css);
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;800&display=swap');
body {
    font-family: 'Poppins', sans-serif;
}
.hover\:w-full:hover {
    width: 100%;
}
.group:hover .group-hover\:w-full {
    width: 100%;
}
.group:hover .group-hover\:inline-block {
    display: inline-block;
}
.group:hover .group-hover\:flex-grow {
    flex-grow: 1;
}
</style>


<template>
    <div class="w-full max-w-md mx-auto bottom-0">

        <!-- <div class="px-7 bg-white shadow-lg rounded-2xl mb-5"> -->
            <div class="flex">
                <div class="btn-group justify-center p-2">
                    <button class="btn"> 
                        軍勢へ戻る
                    </button>
                </div>
                <div class="flex-nowrap btn-group justify-center p-2">
                    <button class="btn">１</button>
                    <button class="btn btn-active" >2</button>
                    <button class="btn">3</button>
                    <button class="btn">4</button>
                    <button class="btn">5</button>
                    <button class="btn" v-if="round < 5" @click="round++">
                    次へ
                    </button>
                    <button class="btn" v-else-if="round = 5">
                    結果へ
                    </button>
                </div>
            </div>
        <!-- </div> -->

        <!-- https://tailwindcomponents.com/component/bottom-navbar-ui-design -->
    

    </div>
</template>
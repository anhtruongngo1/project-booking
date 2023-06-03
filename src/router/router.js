import { createRouter, createWebHashHistory } from "vue-router"
const routes = [
    {
        path: "/",
        name: 'Home',
        component: () => import(/* webpackChunkName : "home" */ "@/views/index.vue")
        
    },
    {
        path: "/register",
        name: 'Register',
        meta: {
            layout : 'auth'
        } ,
        component: ()=> import(/* webpackChunkName : "home" */ "@/views/auth/register.vue")
    },
    {
        path: "/login",
        name: 'Login',
        meta: {
            layout : 'default'
        } ,
        component: ()=> import(/* webpackChunkName : "home" */ "@/views/auth/login.vue")
    },
    {
        path: "/handbook2",
        name: 'handbook',
        // meta: {
        //     layout : 'default'
        // } ,
        component: ()=> import(/* webpackChunkName : "home" */ "@/views/HomeDetails/moreHandbook.vue" )
    },
    {
        path: "/doctor/:id",
        name: 'doctorDetails',
        // meta: {
        //     layout : 'default'
        // } ,
        component: ()=> import(/* webpackChunkName : "home" */ "@/views/Home/Doctor/detailsDoctor.vue" )
    },
    {
        path: "/system",
        name: 'System',
        meta: {
            layout : 'auth'
        } ,
        component: () => import(/* webpackChunkName : "home" */ "@/views/system/system.vue"),
        children: [
            {
              // UserProfile will be rendered inside User's <router-view>
              // when /user/:id/profile is matched
              path: 'manager-account',
                component: () => import(/* webpackChunkName : "home" */ "@/views/system/manager-user/managerAccount.vue"),
                children: [
                    {
                        path: '',
                        component :() =>import("@/views/system/manager-user/form/createUser.vue")
                        
                    },
                    {
                        path: ':id',
                        component :() =>import("@/views/system/manager-user/form/editUser.vue")
                        
                    }
                ]
            },
            {
                // UserProfile will be rendered inside User's <router-view>
                // when /user/:id/profile is matched
                path: 'manager-user',
                  component: () => import(/* webpackChunkName : "home" */ "@/views/system/manager-user/managerUser.vue"),
    
            },
            {
                // UserProfile will be rendered inside User's <router-view>
                // when /user/:id/profile is matched
                path: 'manager-doctor',
                  component: () => import(/* webpackChunkName : "home" */ "@/views/system/manager-doctor/managerDoctor.vue"),
    
            },
            {
                // UserProfile will be rendered inside User's <router-view>
                // when /user/:id/profile is matched
                path: 'manager-schedule',
                  component: () => import(/* webpackChunkName : "home" */ "@/views/system/manager-schedule/managerSchedule.vue"),
    
            },
            {
                // UserProfile will be rendered inside User's <router-view>
                // when /user/:id/profile is matched
                path: 'manager-special',
                  component: () => import(/* webpackChunkName : "home" */ "@/views/system/manager-specialy/managerSpecial.vue"),
    
            },
            {
                // UserProfile will be rendered inside User's <router-view>
                // when /user/:id/profile is matched
                path: 'manager-clinic',
                  component: () => import(/* webpackChunkName : "home" */ "@/views/system/manager-clinic/managerClinic.vue"),
    
            },
            {
                // UserProfile will be rendered inside User's <router-view>
                // when /user/:id/profile is matched
                path: 'manager-handbook',
                component: () => import(/* webpackChunkName : "home" */ "@/views/system/manager-handbook/managerHandbook.vue"),
                children: [
                    {
                        path: '',
                        component :() =>import("@/views/system/manager-handbook/listBlogManage.vue")
                        
                    },
                    {
                        path: 'create-handbook',
                        component :() =>import("@/views/system/manager-handbook/handleHandBook.vue")
                        
                    },
                    {
                        path: 'create-handbook/:id',
                        component :() =>import("@/views/system/manager-handbook/editHandBook.vue")
                        
                    }
                ]
    
              },
            // {
            //     // UserProfile will be rendered inside User's <router-view>
            //     // when /user/:id/profile is matched
            //     path: 'manager-account/:id',
            //     component: () => import(/* webpackChunkName : "home" */ "@/views/system/manager-user/form/editUser.vue"),
            //   },
            // {
            //   // UserPosts will be rendered inside User's <router-view>
            //   // when /user/:id/posts is matched
            //   path: 'posts',
            //   component: UserPosts,
            // },
          ],
    },
    // {
    //     path: "/:pathMatch(.*)*",
    //     component: NotFound,
    // }
]
const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
})
router.beforeEach((to, from, next) => {
    // chuyển đến trang login nếu chưa được login
    const publicPages = ['/', '/login' ,'/system'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('access_token');
  
    if (authRequired && !loggedIn) {
      return next('/login');
    }
  
    next();
  })
export default router
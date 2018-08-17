import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _735e7684 = () => import('../pages/wallet.vue/index.vue' /* webpackChunkName: "pages/wallet.vue/index" */).then(m => m.default || m)
const _5070202a = () => import('../pages/supporters/index.vue' /* webpackChunkName: "pages/supporters/index" */).then(m => m.default || m)
const _2c5957af = () => import('../pages/create/index.vue' /* webpackChunkName: "pages/create/index" */).then(m => m.default || m)
const _435473dc = () => import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */).then(m => m.default || m)
const _5d5f9e60 = () => import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */).then(m => m.default || m)
const _f77c48ba = () => import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */).then(m => m.default || m)
const _a6e6f228 = () => import('../pages/favourite/index.vue' /* webpackChunkName: "pages/favourite/index" */).then(m => m.default || m)
const _ba2a61e8 = () => import('../pages/mystory/index.vue' /* webpackChunkName: "pages/mystory/index" */).then(m => m.default || m)
const _98d5e2ae = () => import('../pages/wallet.vue' /* webpackChunkName: "pages/wallet" */).then(m => m.default || m)
const _0aa882d2 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/wallet.vue",
			component: _735e7684,
			name: "wallet.vue"
		},
		{
			path: "/supporters",
			component: _5070202a,
			name: "supporters"
		},
		{
			path: "/create",
			component: _2c5957af,
			name: "create"
		},
		{
			path: "/admin",
			component: _435473dc,
			name: "admin"
		},
		{
			path: "/about",
			component: _5d5f9e60,
			name: "about"
		},
		{
			path: "/contact",
			component: _f77c48ba,
			name: "contact"
		},
		{
			path: "/favourite",
			component: _a6e6f228,
			name: "favourite"
		},
		{
			path: "/mystory",
			component: _ba2a61e8,
			name: "mystory"
		},
		{
			path: "/wallet",
			component: _98d5e2ae,
			name: "wallet"
		},
		{
			path: "/",
			component: _0aa882d2,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}

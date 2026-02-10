# 📋 Guía de Migración - Vue 2 → Vue 3 + Vite

## ✅ Cambios Completados

### 1. Configuración del Proyecto

#### Archivos Nuevos:
- ✅ `vite.config.js` - Configuración de Vite
- ✅ `index.html` - Movido a la raíz (requerido por Vite)

#### Archivos Eliminados:
- ❌ `babel.config.js` - No necesario en Vite
- ❌ `vue.config.js` - Reemplazado por vite.config.js
- ❌ `public/index.html` - Movido a la raíz

### 2. Dependencias Actualizadas

#### Core:
- `vue`: `^2.6.11` → `^3.4.15`
- `vue-router`: `^3.1.6` → `^4.2.5`
- `vuex`: `^3.3.0` → `^4.1.0`

#### Build Tools:
- `@vue/cli-service` → `vite` `^5.0.12`
- Añadido: `@vitejs/plugin-vue` `^5.0.3`

#### Otros:
- `axios`: `^0.19.2` → `^1.6.7`
- `gsap`: `^3.13.0` (mantenido)
- `sass`: `^1.62.1` → `^1.70.0`

#### Removidas:
- `pug` y `pug-plain-loader` (templates convertidos a HTML)
- Todas las dependencias de `@vue/cli-*`
- `vue-template-compiler`
- `babel-eslint`, `eslint`, `prettier` (pueden re-agregarse si necesitas)

### 3. Código Migrado

#### `src/main.js`
```js
// Antes (Vue 2)
import Vue from 'vue'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// Después (Vue 3)
import { createApp } from 'vue'
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
```

#### `src/router/index.js`
```js
// Antes (Vue 2)
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'hash',
  routes
})

// Después (Vue 3)
import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
```

#### `src/store/index.js`
```js
// Antes (Vue 2)
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: { ... }
})

// Después (Vue 3)
import { createStore } from 'vuex'
export default createStore({
  state() {
    return { ... }
  }
})
```

#### Componentes:
- ✅ `Project.vue` - Template convertido de Pug a HTML
- ✅ `SmoothScroll.vue` - Template convertido de Pug a HTML
- ✅ `App.vue` - Ruta de imagen corregida
- ✅ `Home.vue`, `About.vue`, `Contact.vue` - Sin cambios (ya compatibles)
- ✅ Todos los mixins - Sin cambios (compatibles con Vue 3)

### 4. Rutas de Archivos

#### En `App.vue`:
```html
<!-- Antes -->
<img src="../public/assets/img/Recurso1logo.png" />

<!-- Después -->
<img src="/assets/img/Recurso1logo.png" />
```

Los archivos en `/public` se sirven desde la raíz en Vite.

## 🚀 Comandos Actualizados

```bash
# Desarrollo
npm run dev          # (antes: npm run serve)

# Producción
npm run build        # (sin cambios)

# Vista previa
npm run preview      # (nuevo)
```

## ⚠️ Notas Importantes

### 1. **Imports de Assets**
En Vite, los assets en `/public` se referencian desde la raíz:
```html
<!-- Correcto -->
<img src="/assets/img/imagen.jpg">

<!-- Incorrecto -->
<img src="../public/assets/img/imagen.jpg">
```

### 2. **Hot Module Replacement (HMR)**
Vite tiene HMR más rápido que Webpack. Los cambios se reflejan instantáneamente.

### 3. **GSAP ScrollSmoother**
Asegúrate de tener licencia de GSAP Club GreenSock para ScrollSmoother en producción.

### 4. **Options API vs Composition API**
Actualmente el proyecto usa Options API (100% compatible con Vue 3).
Puedes migrar gradualmente a Composition API cuando lo desees.

### 5. **Variables de Entorno**
Si usas variables de entorno:
```js
// Vue CLI (antes)
process.env.VUE_APP_*

// Vite (ahora)
import.meta.env.VITE_*
```

## 🧪 Próximos Pasos (Opcionales)

### A corto plazo:
- [ ] Verificar que todas las animaciones GSAP funcionen correctamente
- [ ] Testear rutas y navegación
- [ ] Verificar responsive en todos los dispositivos

### A largo plazo:
- [ ] Considerar migrar a Composition API
- [ ] Considerar migrar de Vuex a Pinia (más moderno)
- [ ] Añadir TypeScript (opcional)
- [ ] Optimizar imágenes con plugins de Vite

## 🐛 Troubleshooting

### Problema: "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Problema: Estilos SCSS no se cargan
Verifica que `sass` esté instalado:
```bash
npm install -D sass
```

### Problema: GSAP plugins no funcionan
Asegúrate de que los plugins premium estén correctamente importados:
```js
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { SplitText } from 'gsap/SplitText'
```

## 📚 Referencias

- [Vue 3 Migration Guide](https://v3-migration.vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Vue Router 4](https://router.vuejs.org/)
- [Vuex 4](https://vuex.vuejs.org/)
- [GSAP 3](https://greensock.com/docs/)

---

**Migración completada**: ✅ Enero 2026

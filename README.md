Restante a tener en cuenta: 



 Boton Inicio lleve al componente HomePage.tsx

 En caso de que tire error styled componentes, las dependencias debe tener: 

        "dependencies": {
            "styled-components": "^6.1.19"
          },



 Agregar que a href de Cookie lleve al componente/pagina " terminos.tsx "

 Agregar a Main: 

        import { CookieProvider } from './context/CookiePreferenceContext';

         <CookieProvider>
                    <App />
        </CookieProvider>
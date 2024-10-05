# Travel_OrreryTraveler
Create git project 
```
echo "# Travel_OrreryTraveler" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/hndrkm/Travel_OrreryTraveler.git
git push -u origin main
```
con pnpm y node 
- Instalar react con vite   
```$ npm create vite ```
- Instalar tailwincss  
```$ npm install -D tailwindcss postcss autoprefixer ```
- Configurar Tailwind  
```$ npm dlx tailwindcss init -p ```  
    En el archivo **tailwind.config.js** modificar la propiedad:
    ``` 
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ]
    ```
    En el archivo ```./src/index.css``` se debe agregar lo siguiente:
    ```
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
    ```
- Instalar three y three-fiber Opcional three-drei  
```npm install three @react-three/fiber ```  
```npm install @react-three/drei ```
```npm install @react-three/postprocessing ```
- instalar react router 
```npm install react-router-dom ```

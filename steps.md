- Step 1
    - open the terminal and type `npx  create-react-app .`
        - note 
            - while doing this the folder should be empty
    - to update the npm version ` npm install -g npm@latest`
    - `npm start` will start the  react app

- `rm -rf .git` will work in git bash and  not  in normal terminal  or powershell

- `npm update react react-dom` use  this to update  the  react  and react-dom library
    - i used this when i got  an error saying 
        ```
        export 'ReactDOM' (imported as 'ReactDOM') was not found in 'react-dom/client' (possible exports: createRoot, hydrateRoot)
        ```
        ```
            // For React version 17 and later
        import { createRoot } from 'react-dom';

        // For React version 16 and earlier
        import ReactDOM from 'react-dom';
        ```

- install tailwind css
    - ` npm install -D tailwindcss postcss autoprefixer`
    - `npx tailwindcss init`

- install routers
    - `npm i react-router-dom`

- since there is a version difference in , delete the node_modules in client 
    - after deleting copy `package.json` and `package-lock.json` from the git (https://github.com/akashyap2013/MERN_Login_App_with_ResetEmail/blob/Main/client/package.json) to the client folder
    - then run `npm install` in the client folder
    - this will install the correct version of the packages

- install `tailwindcss intellisense extension` so that the selected class will be shown in the intellisense in the vs code
    - after adding restart the vscode  so for the extension to take effect
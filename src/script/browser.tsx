import * as React from "react";
import * as ReactDOM from "react-dom";


import {App} from './app.tsx';


import {createStateFromUri} from "./uri/create-state-from-uri.ts";
import {createUriFromState} from "./uri/create-uri-from-state.ts";
import {createTitleFromState} from "./uri/create-title-from-state.ts";





window.addEventListener('load', function() {


    const root = document.getElementById('root');
    const app = new App();




    function loadStateFromUri(){
        createStateFromUri(window.location.pathname+window.location.search+window.location.hash)
            .then((state)=>{

                app.setState(state);

                console.log('First render...');
                ReactDOM.render(
                    app.createJSX(),
                    root
                );


                createTitleFromState(state.toJS()).then((title)=>{
                    document.title = title;
                });

            });
    }
    loadStateFromUri();




    window.onpopstate = () => {
        loadStateFromUri();
    };





    //todo throttle  import * as _ from "lodash";
    app.subscribe(async function(){


        const state = app.getState();




        //todo use await* in future
        const [uri, title] = await Promise.all([createUriFromState(state) , createTitleFromState(state)]);


        document.title = title;
        history.pushState(state,title,uri);


        //------

        console.log('Render...');
        state;
        ReactDOM.render(
            app.createJSX(),
            root
        );


    });




}, true);





---
slug: installation
title: Installation
description: installation docs
---




Form Rider can be used in single page app environments and also other environments such as php web page. For this it has two download choices.

<br/>

* ### The traditional way (for non single page apps)

1. Download directly from FormRiders website
2. Once FormRider is downloaded, extract it, and put formriderjs folder in your project.
3. Include the following script tag ``` <script> ``` at the bottom of your HTML template or any HTML file.

    ```HTML
    <script type=“module” src=“PATH-TO-FORMRIDERJS/formriderjs/index.js”></script>
    ```
4. A nice message should now apprear in the console notifying of the successful setup
5. Once FormRider setup is done, go next : [understanding configurations and main concepts](http://localhost:3000/docs/understanding-configurations-and-main-concepts)

<br/>

---

<br/>

* ### As a node_module - npm
  1. first, install FormRiderjs
  ```terminal 
  npm -i fomrirderjs 
  ```  

  2. import it
  ```javascript 
  import {formRider} from "formriderjs" 
  ```  
  
  3. Form Rider should be loaded after the react/angular/vue component is mounted. e.g in a react environmenet, it works using class components or functional components as following : 


  ```javascript
  componentDidMount() {
    new formRider();
  }
  ```

  ```javascript
  useEffect() {
    new formRider();
  }
  ```

  4. Since FormRider should check the form before submitting, the submit method should be called only after validating the form because FormRider will return a vlaue to inform you if the validaion is ok or not, to do that lets create a method and call it validating(){} but you are free to call it what you want, inside this method we will call a FormRider function to inform us of the validation status, depending on this status the form will be submit or not.


  ```javascript
  validating(){
    window.setTimeout(()=> {
      let status = formrider.getValidationStatus();
      if(status === true){
        // here you should put your submit procedure
      }
    })}
  ```



  5. A nice message should now apprear in the console notifying of the successful setup
  6. Once FormRider setup is done, go next : [understanding configurations and main concepts](http://localhost:3000/docs/understanding-configurations-and-main-concepts)


<br/>


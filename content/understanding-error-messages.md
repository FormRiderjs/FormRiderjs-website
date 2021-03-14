---

slug : understanding-error-messages
title : Understanding error messages
description : is out error messages

---

You might get encountered to some errors during the implementation of Form Rider in your website, in case you are unable to resolve it or the error is not listed here, don’t hesitate to post an issue on Form Rider [Github issues](https://github.com/FormRiderjs/FormRiderjs/issues) or on the dedicated [Slack channel](https://formriderjs.slack.com/)

---

* **Error** : https://Path to form rider/formriderjs/formRiderJsonConfi.json (404 not found)
  
  * **Signification** :
    
    FormRider was not able to find _formRiderJsonConfig.json_. this error is not usual because FormRider should find this file automatically unless the user changed its location or it is in a untested environment
    
    * **Fix** :

        go into FormRiderjs -> index.js, here you can find the path to json configs. Change it in order to let FormRider find it. 

---

* **Error** : SyntaxError: JSON.parse: unexpected character at line 1 column 1 of the JSON data
  
  * **Signification-1** :
    
    FormRider was not able to find __formRiderJsonConfig.json__. this error is not usual because FormRider should find this file automatically unless the user changed its location or it is in a untested environment
    
    * **Fix** :

        go into FormRiderjs -> index.js, here you can find the path to json configs. Change it in order to let FormRider find it.

  * **Signification-2** :
    
    There might be an error in your _formRiderJsonCofig.json_ syntax

    * **Fix** :

        Check the syntax of FormRider configs file and correct it.

---

* **Error** : Unknown data-frform _some data-frform here_ not declared in formRiderJsonConfig
  
  * **Signification** :
    
    Form Rider could not validate the form because it is not defined in _formRirderJsonConfig_.
    
    * **Fix** :

        The same _data-frform_ you defined in the HTML document should also be defined the correspondent HTML document in json configs.

---

* **Error** : Unknow data-name _some data name here_ not declared in formRiderJsonConfig
  
  * **Signification** :
    
    Form Rider could not validate the form because the a data-name was defined only in HTML document but not in _formRiderJsonConfig_.
    
    * **Fix** :

        The same data-name you defined in the HTML input should also be defined in json config under the correspondent data-frForm name.

---

* **Error** : Unknow data-name _some input name in json config_ in formRiderJsonConfig
  
  * **Signification** :
    
    The form validation could not happen because the input data-name was defined only in json configs but not in HTML input.
    
    * **Fix** :

        The same data-name you defined in json configs should also be defined the correspondent input.

---


* **Error** : An inCommon name was not defined in inCommon correspondence
  
  * **Signification** :
    
    The inCommon name the you defined in your validator is not defined in inCommonCorrespondance json property
    
    * **Fix** :

        inCommon name should be also defined under the inCommon correspondence.

---

* **Error** : Unknow validator property _Some validator property here_ in FormRiderjsonConfig
  
  * **Signification** :
    
    that validator you defined as a json property in json configs does not exist in Form Rider, the form cannot be validated
    
    * **Fix** :

        there might be a typo in what you have written, you can refer to Validators and functionalities section of Form Rider documentations and chose the wanted validator

---


* **Error** : Notification Code is not defined in notifications
  
  * **Signification** :
    
    The notification code you want to use/defined in _notificationCode_ json property under the _data-frform_ was not defined in notifications section of json cofigs
    
    * **Fix** :

        _notificationCode_ should be defined in two places, under the data-frform in notificationCode property as well as under the notifications property.

---


* **Error** : Unknow data-name _some input name in json config_ in formRiderJsonConfig
  
  * **Signification** :
    
    The form validation could not happen because the input data-name was defined only in json configs but not in HTML input.
    
    * **Fix** :

        The same data-name you defined in json configs should also be defined the correspondent input.

---

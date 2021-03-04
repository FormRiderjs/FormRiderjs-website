---

slug : understanding-configurations-and-main-concepts
title : Understanding configurations and main concepts
description : this si the notifications page
order : 3
---

Foreach input to validate you should add a custom HTML attribute _**data-name**_ with a unique value , you should also add a custom HTML attribute _**data-frform**_ with a unique value to the parent form.

FormRider will then check for every form and input who has these custom attributes and apply what Additional configurations you associate to each _**data-frform**_  and _**data-name**_ in the configuration file **formRiderJsonConfig.json** .

<br/>

---

<br/>

### Explaining configurations and main concepts : 
**formRiderJsonConfig.json** is where put FormRider configs, here you can find properties explication under each one. 

<br/>

```JSON
{
    "notifications" : [{
        /*it’s where notifications are added, you can  add as much notifications
         as you want. for each notification there is these properties:*/
        "notificationCode" : <value type string>,
        /*notificationCode is like the notification reference, it’s 
        the only way the FormRider will now which notification to 
        show, it should be a unique value of int type, i.e.  1 or 2 or 3 etc.*/
        "text" : <value type string>,
        /*foreach notification there is a text to be shown, i.e. thank you 
        for contacting us/form was not submit because…*/
        "textColor" : <value type string (hex)>,
        /*You can put the notification text color here, make sure it is
        a hex value i.e. #ffffff for color white.*/
        "BackgroundColor" : <value type string (hex)>
        /* You can put the notification background color here, make sure it is a
        hex value i.e. #1D1D1D for lighter black.*/
    }],
    "elementsToApplyValidationOn" : {
        /*elements where we want to apply validation on*/
        "<data-frform>" : {
        /*to be replaced by the value of the custom HTML attribute data-frForm
         defined in the correspondent parent form, this value is what will 
         make Form Rider recognize the form so make sure it is unique.
         you can make as many <data-frform> sections.*/
            "notificationCode" : {
            /*put the notificationCode that you should’ve defined in the 
            notificationCode in notifications section.*/
                "validated" : <value type integer>,
                /* e.g : if you put "validated" : 1 then when the form is validated 
                it will show the notification with a notificationCode:1 */
                "notValidated" : <value type integer>
                /* e.g : if you put "notValidated" : 2 then when the form is not validated 
                it will show the notification with a notificationCode:2 */
            },
            "resetFormUponSubmit" : <value type Boolean>,
            /* The form can be reset or not, but in case you put true
             then this action is only possible upon a successful submit */
            "inputNameToValidate" : {
            /*to be replaced by the value of the custom HTML attribute 
            data-name defined in the correspondent input*/
                "<data-name>" : {
                /*data-name is to be replaced by the custom html attribute
                data-name value that you should’ve added previously to the
                input that you want to validate. This is basically the 
                input you want to validate, so you can add as many inputs
                as you want, it should be a unique value and to be replaced
                and for each input, there is validators which 
                are validation functions*/


                    <Go to Validators and functionalities to see how validators work>
                    "<validator1>" : <validator1 values>,
                    "<validator2>" : <validator2 values>
                }
            }
        }
    }
}
```

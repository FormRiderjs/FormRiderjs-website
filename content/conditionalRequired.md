---
slug: conditionalRequired
title: inCommon (conditional required)
description: conditional required parameter
titleExplained : conditional validation of validators of required type
---

inCommon validation is useful for conditional validation of required type, it can be used with "required", "checkboxRequired" and "radioRequired". in order to understand how inCommon works please read this page till the end.

---

___"inCommonCorrespondence"___ object syntax

```JSON
{
    "inCommonCorrespondence": [
        {
            "name": <value of string type>,
            "neededPointsToValidate": <value of int type>
        }
    ]    
}
```

___"inCommon"___ object syntax

  ```JSON
  {
      "inCommon" : {
          "name" : <value of string type>,
          "pointsGiven" : <value of int type>
      }
  }
  ```


---

- ### **What is inCommon conditional validation ?**

  In simple words, it is validating a form only when a common thing between several inputs is fulfilled.

- ### **Why using, when to use conditional validation ?**

  we can use conditinoal validation only with 3 types of validators :

  - ["requried"](/docs/required) validator
  - ["checkboxRequired"](/docs/checkboxrequired) validator
  - ["radioRequired"](/docs/radiorequired) validator.

  Using conditional validation is useful when there is several required inputs but **filling one or several one of them will make other inputs not required any more** and we can submit the form, so in this case we have to use _inCommon_ validation because there is something in common between these inputs.

- ### **How ?**
   - first, we should define an _"inCommonCorrespondence"_ object under _"resetFormUponSubmit"_ object.
      - the "_name_" of this _"inCommonCorrespondence"_ should be the same in all inputs we want to validate in a conditional way because it is how Form Rider will know that an inCommon condition does exist.
     - the _"neededPointsToValidate"_ of this _"inCommonCorrespondence"_ is to tell how many inCommon point of an inCommon name we need to validate the form.
     - __for each different inCommon__, we should add _"name"_ and _"neededPointsToValidate"_ in _"inCommonCorrespondence"_.

    ```JSON
    {
        "inCommonCorrespondence": [
            {
                "name": <value of string type>,
                "neededPointsToValidate": <value of int type>
            },
            {
                "name": <another name>,
                "neededPointsToValidate": <value of int type>
            }
            {
                "name": <and also another name if we want>,
                "neededPointsToValidate": <value of int type>
            }
            //etc...
        ]    
    }
    ```


    - in the _"required"/"checkboxRequired"/radioRequired_ validator of __each input__ we want to validate in a conditional way, we should replace the _true_ value of the validaor by an "_inCommon_" object.
      - the "_name_" of this inCommon should be the same in all inputs related to each other we want to validate in a conditional way, it is how Form Rider will know that these inputs are connected together.
      - the "_pointsGiven_" of the inCommon is to represent how many points this input represents. for example if we put in an input _"inCommon"."pointsGiven" : 1_ and we put _"inCommonCorrespondence".neededPointsToValidate" : 4_ it means that if we fill this input also need another 3 points in order to validate this inCommon. but if we put  _"inCommon"."pointsGiven" : 4_ it means that if we only fill this input then the form can be validated, in other words, the sum of filled _"pointsGiven"_ inputs should be equal to _"neededPointsToValidate"_ value not more not less.

    ```JSON
    //The usual required validator
    "required " : [
        true,
        "a custom error message"
    ]

    //After replacig true by the inCommon object it become

    "required" : [
        {
            "inCommon" : {
                "name" : <value of string type>,
                "pointsGiven" : <value of int type>
            }
        },
        "a custom error message"
    ]

    ```
---

* ## __EXAMPLES__ : 
 
 ### __Example - 1 :__ 

 You are ordering a keyboard and there is 3 inputs for the delivery adress : two check boxes (one for retail and the other one to take it from the shop) and a text input for home delivary adress. a delivary adress is required but only one adress not 3 together, (because obviously it cannot be delivered to three locations at the same time), so checking one checkbox or filling the textinput will fulfill the required delivery adress condition and you are able to submit the form. in this case we have an _inCommon_ between these 3 inputs which is the delivery adress. in order to implement this : 

  1. After adding the _data-name_ with a unique value to each input

  ```HTML

    <div>
        <input type="checkbox" name="table" data-name="retail">
        <label for="table">table <b>(optional)</b></label>
    </div>

    <div>
        <input type="checkbox" name="table" data-name="shop">
        <label for="table">table <b>(optional)</b></label>
    </div>

    <div>
        <input type="text" placeholder="Another wish" data-name="home">
    </div>
  ```

  2. in formRiderJsonConfigs.json, instead of the traditional way of implementing "required" and "checkboxRequired" like this :

  ```JSON
    {
        "retail" : {
            "checkboxRequired" : [true, "retail input is required"]
        },
        "shop" : {
            "checkboxRequired" : [true, "retial input is required"]
        },
        "home" : {
            "required " : [true, "a home adress is required"]
        }
    }
  ```

  we should instead implement it in another way and add an _"inCommon"_ object instead of _"true"_

  ```JSON
  {
        "retail" : {
            "checkboxRequired" : [{"inCommon" : {"name" : "deliveryAdress","pointsGiven" : 1}},"retail input is required"]
        },
        "shop" : {
            "checkboxRequired" : [{"inCommon" : {"name" : "deliveryAdress","pointsGiven" : 1}},"shop checkbox should be checked"]
        },
        "home" : {
            "required" : [{"inCommon" : {"name" : "deliveryAdress","pointsGiven" : 1}},"home adress is required"]
        }
  }
  ```

  so instead of putting the _true_ that makes every one of these inputs required and not connected to each other we put an object _"inCommon"_ with a name that connects them.
 

  3. now, the final step it to put a new object _"inCommonCorrespondence"_ under _"resetFormUponSubmit"_ property e.g : 

    ```JSON
    {
        "inCommonCorrespondence": [
            {
                "name": "deliveryAdress",
                "neededPointsToValidate": 1
            }
        ]    
    }
    ```
 ---

  ### __Example - 2 :__ 

It is time to make christmas whishing list, so there is a form of several checkboxes whishes :

 - whish 1 : PC
 - whish 2 : Laptop
 - whish 3 : keyboard
 - whish 4 : mouse
 - whish 5 : a custom whish
 - whish 6 : cup
 - whish 7 : pen

If the user chose whish 1 OR 2 they should also chose another small whish like 3 or 4 in order to validate the form, but if they only chose whish 3 they cannot validate, and if they chose whish 1 AND 2 they also cannot validate the form, if they chose to make a custom whish then they cannot make other whishes. but in all cases in addition to their whishes they can chose whish 7 and 8 because we want them to be optinoal. 
so in this case you should implement inCommon validation because there is one condition shared between these whishes. let's do that.

  1. first, the html form and the data-name

  ```HTML
    <div>
        <input type="checkbox" name="PC" data-name="PC">
        <label for="PC">PC</label>
    </div>

    <div>
        <input type="checkbox" name="laptop" data-name="laptop">
        <label for="laptop">laptop</label>
    </div>
        <div>
        <input type="checkbox" name="keyboard" data-name="keyboard">
        <label for="keyboard">keyboard</label>
    </div>
        <div>
        <input type="checkbox" name="mouse" data-name="mouse">
        <label for="mouse">mouse</label>
    </div>
    
    <div>
        Cusotm whish :
        <input type="text" name="customWhish" data-name="customWhish">
    </div>

    <div>
        <input type="checkbox" name="cup" data-name="cup">
        <label for="cup">cup <b>(optional)</b></label>
    </div>

    <div>
        <input type="checkbox" name="pen" data-name="pen">
        <label for="pen">pen <b>(optional)</b></label>
    </div>
  ```

  1. in formRiderJsonConfigs.json, instead of putting _true_ as a first parameter of the required vlaidator we should put an _"inCommon"_ object, and the _"inCommon"."name"_ is going to be "whish"

  ```JSON
  {
        "PC" : {
            "checkboxRequired" : [{"inCommon" : {"name" : "whish","pointsGiven" : 2}},"custom erorr message"]
        },
        "laptop" : {
            "checkboxRequired" : [{"inCommon" : {"name" : "whish","pointsGiven" : 2}},"custom erorr message"]
        },
        "keyboard" : {
            "checkboxRequired" : [{"inCommon" : {"name" : "whish","pointsGiven" : 1}},"custom erorr message"]
        },
        "mouse" : {
            "checkboxRequired" : [{"inCommon" : {"name" : "whish","pointsGiven" : 1}},"custom erorr message"]
        },
        "customWhish" : {
            "required" : [{"inCommon" : {"name" : "whish","pointsGiven" : 3}},"custom erorr message"]
        },
        "cup" : {
            "checkboxRequired" : [{"inCommon" : {"name" : "whish","pointsGiven" : 0}},"custom erorr message"]
        },
        "pen" : {
            "checkboxRequired" : [{"inCommon" : {"name" : "whish","pointsGiven" : 0}},"custom erorr message"]
        }
  }
  ```

  so instead of putting the _true_ that makes every one of these inputs required and not connected to each other we put an object _"inCommon"_ with a name that connects them.
 

  3. now, the final step it to put a new object _"inCommonCorrespondence"_ under _"resetFormUponSubmit"_ property e.g : 

```JSON
{
    "inCommonCorrespondence": [
        {
            "name": <value of string type>,
            "neededPointsToValidate": <value of int type>
        }
    ]    
}
```

 ---

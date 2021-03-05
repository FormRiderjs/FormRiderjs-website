---
slug: required
title: required
titleExplained : Input is required
description: required validator
---

As it says, Form Rider will expect the input not to be empty, it can accept only one validator parameter which is _**true**_

```JSON
{
    "required" : [true, "A custom error message"]
}
```

* **Validator parameter** : _true_
* **Use Case** : User input should not be empty, even though, a white space into the user input will pass the validator because it is not empty anymore.
* **Example** :
  
```JSON
{
    "required" : [true, "cursom error message"]
}
```

User input 1 :  _empty input_ (when input is empty) ::: won't pass

User input 2 : _white space_ (when input is only a white space)::: won't pass

User input : _Hello i am a user_ ::: will pass

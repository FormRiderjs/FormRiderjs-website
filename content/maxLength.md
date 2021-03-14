---
slug: maxLength
title: maxLength
titleExplained : Input maximum length
description: required validator
---


“maxLength” will count the number of characters (including spaces) in the input, so the input length should not exceed a given value, **Replace _intValue_ by an int value**.

```JSON
{
    "maxLength" : [intValue, "custom error message"]
}
```


* **Validator parameter** : _intValue_
  
* **Use Case** : user input should not be longer than the _inValue_ number
  
* **Example** :
  
```JSON
{
    "maxLength" : [5, "Input is too long"]
}
```

User input : _Hello_ ::: will pass

User input : _Hello me_ ::: won’t pass

---
slug: minLength
title: minLength
titleExplained : Input minimum length
description: required validator
---



“minLength” will count the number of characters (including spaces) in the input, so the input length should not be less than a given value, **Replace intValue by an int value.**

```JSON
{
    "minLength" : [intValue, "custom error message"]
}
```

* **Validator parameter** : _intValue_
  
* **Use Case** : user input should be shorter than intValue number
  
* **Example** :
  
```JSON
{
    "minLength" : [5, "input is too short"]
}
```


User input : _Hello_ ::: will pass

User input : _Hi_ ::: won't pass

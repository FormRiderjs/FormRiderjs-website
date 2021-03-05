---
slug: email
title: email
titleExplained : Input is email
description: required validator
---

“email” keyword will tell Form Rider to check if the user has entered an email or even if the email is a valid one.

```JSON
{
    "email" : [true, "custom error message"]
}
```

* **Validator parameter** : _true_

* **Use Case** : User input is expected to be an email

* **Example** :

```JSON
{
    "required" : [true, "cursom error message"]
}
```

User input : _Hello@hello.com_ ::: will pass

User input : _hello@e.c_ ::: won’t pass

User input : _hello^hello.com_ 12 ::: won’t pass

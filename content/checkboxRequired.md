---
slug: checkboxRequired
title: checkboxRequired
description: required checkbox input validator
titleExplained : required checkbox input validator
---

* _"checkboxRequired"_ validator will check if a checkbox is checked or not.
* _checkboxRequired_ is to be used ideally with [_(inCommon)the conditional required_](/docs/conditionalRequired).

---

```JSON

{
    "checkboxRequired" : [true, "custom error message"]
}

```

**validator parameter** : _true_

**Use Case** : the input containing _checkboxRequired_ set to true should be checked, otherwise the form won't be submit.
**Example** :

```JSON
{
    "checkboxRequired" : [true, "the checkbox should be checked"]
}
```

---

_checkboxRequired_ is to be used ideally with [_(inCommon)the conditional required_](/docs/conditionalRequired).

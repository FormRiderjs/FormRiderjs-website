---
slug: dateFormat
title: dateFormat
titleExplainer: Validate the date format of an input
description: Date format input validation
---

the date format of an input should be the same as a pre defined format in jsonConfigurations, there is many options for this validator.

---

**Some Context :**

* Every date has a number of section, like 04/09/1994 has three sections, 04 is section 1, 09 is section 2 and 1994 is section 3, in dateFormat validator we can limit the number of character in each section, we, so for example 04 is two characters.
* each section should have a min value and a max value
* dateFormat can check for the used seperator, for example in 04/09/1994 we used "/" separator, __we can also put "" so the date can be without a separator__.
* section 2 can also be a string vlaue, so instead 04/september/1994,

---

__DateFormat of date with 3 sections and a seperator.__

```JSON
{
    "dateFormat" : [
    [
        [section 1 chars nmbr, section 2 chars nmbr, section 3 chars nmbr],
        [
            [Min value of section 1, Max value of section 1],
            [Min value of section 2, Max value of section 2],
            [Min value of section 3, Max value of section 3]
        ],
        [<separator of string type>]
    ],
    "custom error message"]
}
```

* __Use Case :__ User input should contain 3 sections, between each of them the wanted separator.

* __Exmaple:__
  
```JSON
{
    "dateFormat" : [[[2, 2, 4],[[1, 31],[1, 12],[1900, 2021]],["/"]],"input date does not correpond to the wanted format"]
}
```

User input : 04/09/1994 ::: will pass

User input : 04/13/1994 ::: won’t pass

User input : 04/13-1994 ::: won’t pass

---

__DateFormat of date with 3 sections without a seperator.__

```JSON
{
    "dateFormat" : [
    [
        [section 1 chars nmbr, section 2 chars nmbr, section 3 chars nmbr],
        [
            [Min value of section 1, Max value of section 1],
            [Min value of section 2, Max value of section 2],
            [Min value of section 3, Max value of section 3]
        ],
        [<separator>]
    ],
    "custom error message"]
}
```

* __Use Case :__ User input should contain 3 non separated sections.

* __Exmaple:__
  
```JSON
{
    "dateFormat" : [[[2, 2, 4],[[1, 31],[1, 12],[1900, 2021]],[""]],"input date does not correpond to the wanted format"]
}
```

User input : 04091994 ::: will pass

User input : 04 13 1994 ::: won’t pass

User input : 04131994 ::: won’t pass

---

__DateFormat of date with 3 sections and a seperator.__

```JSON
{
    "dateFormat" : [
    [
        [section 1 chars nmbr, true, section 3 chars nmbr],
        [
            [Min value of section 1, Max value of section 1],
            [true],
            [Min value of section 3, Max value of section 3]
        ],
        [<separator>]
    ],
    "custom error message"]
}
```

* __Use Case :__ User input should contain three sections, the second one should be a string.

* __Exmaple:__
  
```JSON
{
    "dateFormat" : [[[2, true, 4],[[1, 31],[true],[1900, 2021]],["/"]],"input date does not correpond to the wanted format"]
}
```

User input : 04/Mars/1994 ::: will pass

User input : 04/AZERTYazerty/1994 ::: will pass

User input : 04 mars 1994 ::: won’t pass

---

__DateFormat of date with 2 sections and a seperator.__

```JSON
{
    "dateFormat" : [
    [
        [section 1 chars nmbr, section 2 chars nmbr],
        [
            [Min value of section 1, Max value of section 1],
            [Min value of section 2, Max value of section 2]
        ],
        [<separator>]
    ],
    "custom error message"]
}
```

* __Use Case :__ User input should contain only 2 section, separated by the given separator

* __Exmaple:__
  
```JSON
{
    "dateFormat" : [[[2, 4],[[1, 12], [1900, 2021]],["/"]],"input date does not correpond to the wanted format"]
}
```

User input : 09/1994 ::: will pass

User input : 04/09/1994 ::: won’t pass

---

## __Side notes :__

* if you don't want to require a separator in user input, just leave separator array empty  [""].
* You can put any number in _section 1 chars nbr, section 2 chars nmbr, section 3 chars nmbr_, in here's examples i only used numbers such as 2, 2, 4 but you can put any number instead.
* You can put any number in _Min value of a section, max value of a section_, in here's examples i only used numbers such as 2, 2, 4 but you can put any number instead.

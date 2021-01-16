# Simple Hook for React Native AsyncStorage

This package makes the use of Async Storage with React Native Project.

It provides you an easier way to update, remove and reach a storage key's value.

## Installation

You need to have **@react-native-async-storage/async-storage** in your React Native project.

[For AsyncStorage documentation click here.] (https://github.com/react-native-async-storage/async-storage)

### Yarn

```
yarn add @ugenc/use-storage-hook
```

### Npm

```
npm i @ugenc/use-storage-hook
```

## Usage

First import the hook.

```
 import { useStorage } from '@ugenc/use-storage-hook'
```

Inside your component call the hook.

```
import React from 'react'
import { View, Text } from 'react-native'

export default function index() {

  const [storeValue, setStore, removeStore] = useStorage('@key'); //provide a storage key.

    return (
        <View>
            <Text></Text>
        </View>
    )
}


```

```
console.log(storeValue) //value of the storage.
```

```
setStore(object) // update the storage with the new value.
```

```
removeStore() // remove all items in the storage.
```

[Give a star :) on GitHub] (https://github.com/ugenc/useStorage)
[ugenc] (https://ugenc.com)

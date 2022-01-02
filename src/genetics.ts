const last = <T>(arr: Array<T>) => {
    return arr[arr.length - 1]
}

const stringLast = last<string>(['1', '23', '2'])

const stringNum = last<number>([1, 2, 3])

const person = <T extends { firstName: any; lastName: string }>(obj: T) => {
    return {
        ...obj,
        fullName: obj.firstName + ' ' + obj.lastName
    }
}

const Mike = person({ firstName: 'mike', lastName: 'fast', age: 15 })


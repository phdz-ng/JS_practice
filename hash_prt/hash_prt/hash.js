class HashMap{
    constructor() {
        this.capacity = 16
        this.loadFactor = 0.75
        this.buckets = new Array(this.capacity);
        this.size = 0; // number of stored entries
    }

    hash(key) {
        let hashCode = 0

        const primeNumber = 31
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        return hashCode;
    }

    checkLoadFactor() {
        if (this.capacity * this.loadFactor < this.length()) {
            this.resize();
        };
    };

    set(key, value) {
        const index = this.hash(key)

        if (!this.buckets[index]) {
            this.buckets[index] = []
            this.buckets[index].push({key,value})
            this.checkLoadFactor()
        }
    }

    get(key) {
        const index = this.hash(key)
        const bucket = this.buckets[index]

        if(!bucket) return null

        for (let i=0; i<bucket.length; i++) {
            if (bucket[i].key === key) {
                return bucket[i].value
            }
        }
        return null
    }

    has(key) {
        const index = this.hash(key)
        const bucket = this.buckets[index]
        
        if(!bucket) return null

        for (let i=0; i<bucket.length; i++) {
            if (bucket[i].key === key) return true
        }
        return false
    }

    remove(key) {
        const index = this.hash(key)
        const bucket = this.buckets[index]

        if(!bucket) return null

        for (let i=0; i<bucket.length; i++) {
            if (bucket[i].key === key) {
                bucket.splice(i,1)
                return true
            }
        }
        return false
    }

    length() {
        let mapLength = 0

        this.buckets.forEach((bucket) => {
            if(!bucket) return null

            mapLength += bucket.length
        })
        return mapLength
    }

    clear() {
        his.buckets = new Array(this.capacity);
    }

    keys() {
        let allKeys = []

        this.buckets.forEach((bucket) => {
            if (!bucket) return

            for (let i=0; i<bucket.length; i++) {
                allKeys.push(bucket[i].key)
            }
        })

        return allKeys
    }

    values() {
        let allValues = []

        this.buckets.forEach((bucket) => {
            if (!bucket) return

            for (let i=0; i<bucket.length; i++) {
                allValues.push(bucket[i].value)
            }
        })
        return allValues
    }

    entries() {
        let allEntries = []

        this.buckets.forEach((bucket) => {
            if(!bucket) return

            for (let i=0; i<bucket.length; i++) {
                allEntries.push(bucket[i].key, bucket[i].value)
            }

        })
        return allEntries
    }

    resize() {
        const elements = this.entries();
        
        this.capacity *= 2;
        this.buckets = new Array(this.capacity);

        elements.forEach((element) => {
            this.set(element[0], element[1]);
        });
    };


}

const H1 = new HashMap
const
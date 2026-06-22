class Node {
    constructor(data) {
        this.data = this.data
        this.left = null
        this.right = null

    }
}

class Tree {
    constructor(array) {
        this.root = this.buildTree(array)
    }

    buildTree(array) {
        const mid = Math.floor(array.length/2)
        const root = new Node(array[mid])

        root.left = this.buildTree(array.slice(0, mid))
        root.right = this.buildTree(array.slice(mid+1))

        return root
    }

    includes(value) {
        let node = this.root
        
        while (node !== null) {
            if (node.data === value) return node
            if (value < node.data) {
                node = node.left
            } else { 
                node = node.right
            }
        }
        return null
    }

    insert(value) {
        const newNode = new Node(value)
        if (this.root === null) return newNode
        
        let current = this.root
        while (current !== null) {
            if (value < current.data) {
                if (current.left === null) {
                    current.left = newNode
                    return
                }
            } else {
                if (current.left === null) {
                    current.right = newNode
                    return
                }
            }
        }
        return root
    }

    print(value) {
        console.log(value);
    }

    getSuccessor(current) {
        current = current.right
        while (current!== null && current.left !== null) {
            current = current.left
        }
        return current
    }

    deleteItem(value) {
        let current = this.root
        let parentNode = null
        if (current === null) return null

        while(current !== null && current.data !== value) {
            parentNode = current
            if (value < current.data) {
                current = current.left
            } else {
                current = current.right;
            }
        }
        // 2. Not found
        if (current === null) return this.root;

        // Case 1: Leaf node
        if (!current.left && !current.right) {
            if (parentNode === null) {
                this.root = null; // deleting root only node
            } else if (parentNode.left === current) {
                parentNode.left = null
            } else if (parentNode.right === current) {
                parentNode.right = null
            }
        } else if (!current.left || !current.right) {
            const child = current.left || current.right
            // Case 2: node has one child
            if (parentNode === null) {
                this.root = child}
            if (parentNode.left === current) {
                parentNode.left = child
            } else {parentNode.right = child}
        }
        else {
            // Case 3: node has 2 children
        if (current.left && current.right) {
            const succ = this.getSuccessor(current)
            current.data = succ.data
            
        }
        return this.root
        } 
    }
    heightOfNode(node) {
        if (node === null) {
            return -1;
        }
    
        return 1 + Math.max(
            this.heightOfNode(node.left),
            this.heightOfNode(node.right)
        );
    }

    height(value ){
        let node = this.includes(value)
        if (node) { return this.heightOfNode(node)} 
        else return undefined
    }

    depth(value) {
        let current = this.root
        let depth = 0

        while (current !== null) {
            if (value = current.data) {
                return depth
            }

            if (value < current.data) {
                current = current.left
            } else {current = current.right}
            depth++
        }
        return undefined
        
    }

    isBalanced(current = this.root) {
        if (current === null) return true
        const diff = Math.abs(this.heightOfNode(current.left) - this.heightOfNode(current.right))

        if (diff > 1) return false
        return (
            this.isBalanced(current.left) &&
            this.isBalanced(current.right)
        )
        
    }

    inOrderForEach(root, callback) {
        if (root === null) return 
        //Traverse to the left
        this.inOrderForEach(root.left, callback)
        callback(root.data)
        this.inOrderForEach(root.right, callback)
    }

    preOrderForEach(root, callback) {
        if (root === null) return
        //root - left - right
        callback(root.data)
        this.preOrderForEach(root.left, callback)
        this.preOrderForEach(root.right, callback)
    }

    postOrderForEach(root, callback) {
        if (root === null) return
        //left-right-root
        this.postOrderForEach(root.left, callback)
        this.postOrderForEach(root.right, callback)
        callback(root.data)
    }

    levelOrderForEach(root, callback) {
        if (root === null) return
        let queue = [root]
        let result =[]

        while (queue.length > 0) {
            const visiting = queue.shift()
            result.push(visiting.data)
            //Adding left children to the queue (if any)

            if (visiting.left !== null) {
                queue.push(visiting.left)
            }
            if (visiting.right !== null) {
                queue.push(visiting.right)
            }

        }
        if (callback) callback(result)
        return result
    }

    reBalance() {
        let root = this.root
        if (root === null) return undefined
        const TreeArray = this.levelOrderForEach(root)

        const SortedTree = TreeArray.sort((a,b) => a - b)

        this.root = this.buildTree(SortedTree)

        return this.root

    }

}


const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node === null || node === undefined) {
      return;
    }
  
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
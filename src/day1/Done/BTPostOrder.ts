function walk (curr: BinaryNode<number> | null, path: number[]): number[] {
    // Base case: if the current node is null, return the path
    if (!curr) {
        return path;
    }

    // Pre
    walk(curr.left, path); 
    walk(curr.right, path); // Visit the most right child first after going all the way left

    // Recurse
    path.push(curr.value); // Visit the current most leftist node


    // Post
    return path; // Return the path after visiting both children
    
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);

}
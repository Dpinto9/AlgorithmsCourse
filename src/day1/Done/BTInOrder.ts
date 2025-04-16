function walk (curr: BinaryNode<number> | null, path: number[]): number[] {
    // Base case: if the current node is null, return the path
    if (!curr) {
        return path;
    }

    // Pre
    walk(curr.left, path); // Visit the left child first

    // Recurse
    path.push(curr.value); // Visit the current most leftist node
    walk(curr.right, path);

    // Post
    return path; // Return the path after visiting both children
    
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);

}
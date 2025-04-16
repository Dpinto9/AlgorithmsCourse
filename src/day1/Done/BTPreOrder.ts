function walk (curr: BinaryNode<number> | null, path: number[]): number[] {
    // Base case: if the current node is null, return the path
    if (!curr) {
        return path;
    }

    // Pre
    path.push(curr.value); // Visit the current node first

    // Recurse
    walk(curr.left, path);
    walk(curr.right, path);

    // Post
    return path; // Return the path after visiting both children
    
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);

}
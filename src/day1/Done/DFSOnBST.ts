function search (curr: BinaryNode<number> | null, needle: number): boolean {
    // Base case
    if (!curr) return false;

    // Check if the current node is the needle
    if (curr.value === needle) return true;

    if (curr.value < needle) {
        // Search in the right subtree
        return search(curr.right, needle);
    } else {
        // Search in the left subtree
        return search(curr.left, needle);
    }

}
export default function dfs(head: BinaryNode<number>, needle: number): boolean {

    return search(head, needle);

}
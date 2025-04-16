export default function bfs(head: BinaryNode<number>, needle: number): boolean {

    const q: (BinaryNode<number> | null)[] = [head];

    while (q.length) {
        const curr = q.shift() as BinaryNode<number>;

        if (!curr) {
            continue;
        }
        // Check if the current node is the one we're looking for

        // Search
        if (curr.value === needle) {
            return true;
        }

        q.push(curr.left);
        q.push(curr.right);
    }
    return false;
}
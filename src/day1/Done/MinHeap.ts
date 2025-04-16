export default class MinHeap {
    public length: number;
    public data: number[];
    

    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }
    delete(): number {
        if (this.length === 0) {
            return -1;
        }
        const out = this.data[0];
        this.length--;

        if (this.length === 0) {
            this.data = [];
            return out;
        }

        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return out
    }

    heapifyUp(index: number): void {
        if (index === 0) {
            return;
        }

        const parentIndex = this.parent(index);
        const parentValue = this.data[parentIndex];
        const value = this.data[index];

        if (parentValue > value) {
            this.data[parentIndex] = value;
            this.data[index] = parentValue;
            this.heapifyUp(parentIndex);
        }


    }

    heapifyDown(index: number): void {
        const lIdx = this.leftChild(index);
        const rIdx = this.rightChild(index);

        if (index >= this.length || lIdx >= this.length) {
            return;
        }

        const lV = this.data[lIdx];
        const rV = this.data[rIdx];
        const v = this.data[index];

        if (lV  > rV && v > rV) {
            this.data[index] = rV;
            this.data[rIdx] = v;
            this.heapifyDown(rIdx);
        } else if (lV < rV && v > lV) {
            this.data[index] = lV;
            this.data[lIdx] = v;
            this.heapifyDown(lIdx);
        }
    }

    rightChild(index: number): number {
        return 2 * index + 2;
    }

    leftChild(index: number): number {
        return 2 * index + 1;
    }

    parent(index: number): number {
        return Math.floor((index - 1) / 2);
    }
}
export default function bs_list(haystack: number[], needle: number): boolean {
    let high = haystack.length;
    let low = 0;
    let mid = Math.floor(low + (high - low) / 2);

    do {
        if (haystack[mid] === needle) {
            return true;
        } else if (haystack[mid] < needle) {
            low = mid + 1;
        } else {
            high = mid;
        }
    } while (low < high);

    return false;
}

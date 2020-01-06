/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let lenght = nums1.length + nums2.length;
    let odd = lenght % 2;
    let index = Math.ceil(lenght / 2) - 1;
    let i1 = 0;
    let i2 = 0;
    while ((i1 + i2) < index) {
        if (nums1.length === 0 || i1 === nums1.length) {
            i2++;
            continue;
        }

        if (nums2.length === 0 || i2 === nums2.length) {
            i1++;
            continue;
        }

        if (nums1[i1] < nums2[i2]) {
            i1++;
        } else {
            i2++;
        }
    }

    if (odd) {
        console.info(i1);
        console.info(i2);
        let m1 = (i1 < nums1.length) ? nums1[i1] : nums2[i2 + 1];
        let m2 = (i2 < nums2.length) ? nums2[i2] : nums1[i1 + 1];
        if (m1 === undefined) {
            return m2;
        }
        if (m2 === undefined) {
            return m1;
        }
        return m1 < m2 ? m1 : m2;
    } else {
        if (i1 === nums1.length) {
            return (nums2[i2] + nums2[i2 + 1]) / 2;
        }

        if (i2 === nums2.length) {
            return (nums1[i1] + nums1[i1 + 1]) / 2;
        }

        let m1 = nums1[i1];
        let m2 = nums2[i2];
        if (m1 < m2) {
            if ((i1 + 1) < nums1.length) {
                m2 = (nums1[i1 + 1] < m2) ? nums1[i1 + 1] : m2;
            }
        } else {
            if ((i2 + 1) < nums2.length) {
                m1 = (nums2[i2 + 1] < m1) ? nums2[i2 + 1] : m1;
            }
        }
        return (m1 + m2) / 2;
    }
};
module.exports = findMedianSortedArrays;

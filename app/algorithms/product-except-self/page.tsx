export default function Page() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-10">Product of Array Except Self</h1>
      <h2 className="text-3xl font-bold mb-6">問題</h2>
      <p className="pb-4">
        整数の配列 nums が与えられたとき、answer[i] が nums[i] を除く nums
        の全ての要素の積と等しくなるような配列 answer を返してください。
      </p>
      <p className="pb-6">
        但し、除算演算を使用せずに、O(n)
        時間で実行されるアルゴリズムを作成する必要があります。
      </p>
      <h3 className="text-2xl font-bold mb-2">制限</h3>
      <ul className="list-disc list-inside pl-2">
        <li>
          2 &le; nums.length &le; 10<sup>5</sup>
        </li>
        <li>-30 &le; nums[i] &le; 30</li>
      </ul>
    </div>
  );
}

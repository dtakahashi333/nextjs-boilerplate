export default function Page() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-10">Rotate Array</h1>
      <h2 className="text-3xl font-bold mb-6">問題</h2>
      <p className="pb-4">
        整数の配列が与えられるとき、その配列を右方向に k
        回シフトしてください。ただし、k
        は負でない整数とします。シフトの際に配列要素のインデックスが配列の境界を超える場合、インデックスが
        0 に戻るとします。例えば、長さが 5 の配列で 1
        回シフトを行った場合、インデックス 4 の要素はインデックス 0
        の位置に戻ります。
      </p>
      <p className="pb-6">
        また、関数は戻り値として配列を返すのではなく、渡された元の Array
        を変更し、並べ替えを行なってください。
      </p>
      <h3 className="text-2xl font-bold mb-2">制限</h3>
      <ul className="list-disc list-inside pl-2">
        <li>
          1 &le; nums.length &le; 10<sup>5</sup>
        </li>
        <li>
          -2<sup>31</sup> &le; nums[i] &le; 2<sup>31</sup> - 1
        </li>
        <li>
          0 &le; k &le; 10<sup>5</sup>
        </li>
      </ul>
    </div>
  );
}

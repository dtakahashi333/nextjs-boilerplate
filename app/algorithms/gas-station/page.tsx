export default function Page() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-10">Gas Station</h1>
      <h2 className="text-3xl font-bold mb-6">問題</h2>
      <p className="pb-4">
        円形のルートに沿って n 個のガソリンスタンドがあります。i
        番目のガソリンスタンドではガソリンを gas[i] だけ補充できるとし、i
        番目のガソリンスタンドから (i + 1) 番目のガソリンスタンドに移動するには
        cost[i]
        のガソリンが必要となります。車のタンクには無限にガソリンを補充できるとし、空のタンクでどれかのガソリンスタンドから出発して、ルートを一周しなければなりません。
        gas と cost
        の二つの整数配列が与えられたとき、時計回りに一周するために出発するべきスタート地点のインデックスを返してください。もし一周できない場合は
        -1 を返してください。答えが存在する場合、その答えは一つになります。
      </p>
      <h3 className="text-2xl font-bold mb-2">制限</h3>
      <ul className="list-disc list-inside pl-2">
        <li>n = gas.length = cost.length</li>
        <li>
          1 &le; n &le; 10<sup>5</sup>
        </li>
        <li>
          0 &le; gas[i], cost[i] &le; 10<sup>4</sup>
        </li>
      </ul>
    </div>
  );
}

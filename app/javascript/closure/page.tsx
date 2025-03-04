export default function Page() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-10">クロージャ</h1>
      <p className="mb-6">
        クロージャ（closure）は JavaScript
        の機能で、関数がその外部のスコープにある変数を「記憶」するという特性を指します。クロージャは、ある関数の内部で別の関数を定義し、その内部関数が外側の関数の変数にアクセスできる状態を指します。通常、関数内で定義された変数はその関数の実行が終了するとスコープ外となり、メモリから解放されますが、クロージャとして定義された関数は、外側の関数が終了した後もその変数を保持し続けることができ、関数が生きている限り、外側の関数で定義された変数にアクセスすることができます。
      </p>
      <p className="mb-6">クロージャは以下のように定義します。</p>
      <pre className="bg-gray-200 rounded-md overflow-x-auto mb-6">
        <code className="block px-4 py-2 text-sm">
          {`
function outer() {
  let outerVar = "I'm an outer variable";
  
  // 内部関数（クロージャ）を返す
  return function inner() {
    console.log(outerVar);  // 外側の変数にアクセス
  };
}
const closureFunction = outer();  // outer関数が終了しても、closureFunctionはouterVarを参照し続ける
closureFunction();  // "I'm an outer variable" と表示される
          `}
        </code>
      </pre>
      <p className="mb-6">
        この例では、outer 関数が終了した後でも、closureFunction が outerVar
        にアクセスできることがわかります。これはクロージャが outerVar
        の参照を保持し続けているからです。
      </p>
      <p className="mb-6">次の例を見てください。</p>
      <pre className="bg-gray-200 rounded-md overflow-x-auto mb-6">
        <code className="block text-sm px-6">
          {`
function createCounter() {
  let count = 0; // 変数 count はプライベートで、外部からはアクセスできません
  
  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount()); // 2
          `}
        </code>
      </pre>
      <p className="mb-16">
        この例では、変数 count は createCounter
        関数が実行されるとプライベートな状態となり、外部から直接アクセスできなくなります。しかし、クロージャを通じて、内部関数（increment、decrement、getCount）は引き続き
        count にアクセスして変更することができます。
      </p>
      <h2 className="text-3xl font-bold mb-6">ユースケース</h2>
      <p className="mb-10">
        それではクロージャが実際にどのような場面で使用できるか見ていきましょう。
      </p>
      <h3 className="text-2xl font-bold mb-6">
        1. カプセル化（データプライバシー）
      </h3>
      <p className="mb-10">
        まず一つ目のユースケースはカプセル化です。前の例でも説明したように、外側の関数が一度実行されると、その関数内で定義された変数には外部から直接アクセスできなくなります。この特性を利用することで、外部からの変更を受け入れたくない変数を、クロージャを使って安全に管理することができます。
      </p>
      <h3 className="text-2xl font-bold mb-6">
        2. コールバック関数・イベントハンドラ
      </h3>
      <p className="mb-6">
        クロージャは、非同期処理のコールバック関数で非常に役立ちます。例えば、EventListener
        や setTimeout
        などでコールバック関数が実行される際に、外部スコープで定義された変数の状態を保持することができ、その変数をコールバック内でも正しく使用できるようにします。
      </p>
      <pre className="bg-gray-200 rounded-md overflow-x-auto mb-10">
        <code className="block text-sm px-6">
          {`
function delayedGreeting(name) {
  setTimeout(function() {
    console.log(\`Hello, \${name}!\`);
  }, 1000);
}

delayedGreeting("Alice");
          `}
        </code>
      </pre>
      <h3 className="text-2xl font-bold mb-6">3. 関数ファクトリ</h3>
      <p className="mb-6">
        ファクトリ関数を使って動的に関数を生成する際に、クロージャを活用することで、プライベート変数を保持し、各関数に特定の動作や設定を持たせることができます。
      </p>
      <pre className="bg-gray-200 rounded-md overflow-x-auto mb-10">
        <code className="block text-sm px-6">
          {`
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10
const triple = multiplier(3);
console.log(triple(5)); // 15
          `}
        </code>
      </pre>
      <h3 className="text-2xl font-bold mb-6">4. メモ化</h3>
      <p className="mb-6">
        クロージャでは変数をプライベートとして保持できるため、関数の計算結果をキャッシュすることで、同じ引数での関数呼び出し時に再計算を避け、計算資源を節約して負荷を軽減し、パフォーマンスを向上させることができます。
      </p>
      <pre className="bg-gray-200 rounded-md overflow-x-auto mb-16">
        <code className="block text-sm px-6">
          {`
function memoize(fn) {
  const cache = {};
  return function(arg) {
    if (cache[arg] !== undefined) {
      return cache[arg];
    }
    const result = fn(arg);
    cache[arg] = result;
    return result;
  };
}

const factorial = memoize(function(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
});

console.log(factorial(5)); // 120
console.log(factorial(5)); // キャッシュ化された結果: 120      
          `}
        </code>
      </pre>
      <h2 className="text-3xl font-bold mb-6">まとめ</h2>
      <p className="pb-16">
        以上、JavaScript
        クロージャのコンセプトについて見てきましたが、特筆すべき点は、クロージャが外部のスコープで定義された変数を「プライベート」として保持できることにあります。これにより、外部からの変数へのアクセスを制限する一方で、その変数の状態を関数内で保持し続けることができます。結果として、計算負荷の高い関数のパフォーマンス向上や、関数に特別な動作や設定を持たせることが可能になります。また、クロージャは
        setTimeout
        のような非同期処理においてよく使用され、実際にはその存在に気づかずに利用されることも多いです。
      </p>
    </div>
  );
}

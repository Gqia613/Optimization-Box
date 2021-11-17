// ----------------------------------------------------------------------
// エラー内容：Warning: A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components
// 対処法：inputタグをコンポーネント経由で使用した際に、コンポーネント側での値を設定する属性は、valueではなく、defaultValueでなくてはならない

// 失敗例
// コンポーネント側
const InputText = (props) => {
  const { inputValue } = props
  return (
    <Input type="text" value={ inputValue } />
  )
}

// コンポーネント使用する側
const Example = () => {
  return (
    <InputText inputValue={ groupData.group_name } />
  )
}


// 成功例
// コンポーネント側
const InputText = (props) => {
  const { inputValue } = props
  return (
    <Input type="text" defaultValue={ inputValue } />
  )
}

// コンポーネント使用する側
const Example = () => {
  return (
    <InputText inputValue={ groupData.group_name } />
  )
}
// ----------------------------------------------------------------------


// ----------------------------------------------------------------------
// エラー内容：React Hook useEffect has a missing dependency: 'groupId'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
// 対処法：useEffectの第二引数に関数内で使用するグローバル変数または関数名を設定する

// 失敗例
const groupId = '1';

useEffect(() => {
  getGroup(groupId);
},[])

const getGroup = (groupId) => {
  console.log(groupId);
}

// 成功例
const groupId = '1';

useEffect(() => {
  getGroup(groupId);
},[groupId])

const getGroup = (groupId) => {
  console.log(groupId);
}
// ----------------------------------------------------------------------


// ----------------------------------------------------------------------
// エラー内容：APIでデータ取得してきて、それをformに配置して、formから変更すると、変更した値以外からになる
// 対処法：onChangeイベントでデータを変更する際に、明示的にどのデータを変更する変えを宣言する

// 失敗例
const onChangeEvent = (e) => {
  const name = e.target.name;
  setGroupData({
    [name]: e.target.value
  });
}

// 成功例
const onChangeEvent = (e) => {
  const name = e.target.name;
  setGroupData({
    ...groupData, // <--ここで明示的に宣言する　
    [name]: e.target.value
  });
}
// ----------------------------------------------------------------------
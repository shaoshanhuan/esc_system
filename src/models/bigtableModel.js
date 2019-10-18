export default {
    namespace: 'bigtable',
    state: {
        current: 1,
        columnArr: []
    },
    reducers: {
        CHANGECOLUMNS (state, {columnArr}) {
            return {
                ...state,
                columnArr
            };
        }
    },
    effects: {
        *GETCOLUMNSFROMLOCALSTORAGE (action, {put}) {
            // 试着从本地存储中读取column字段
            const columnsFromLocalStorage = localStorage.getItem('columns');
            // 如果这个字段读取出来是null，表示用户第一次来本网站或者清空过缓存
            if (columnsFromLocalStorage === null) {
                // 第一次来，没事儿，给你赋予一个默认值
                localStorage.setItem('columns', JSON.stringify(['image', 'id', 'brand', 'series', 'color']));
            }
            // 再次从本地存储中读取列存储信息，并转换
            const columnArr = JSON.parse(localStorage.getItem('columns'));
            yield put({'type': 'CHANGECOLUMNS', columnArr});
        }
    }
};
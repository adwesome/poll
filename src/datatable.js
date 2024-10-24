function apply_datatable(element_id) {
  const table = new DataTable(`#${element_id}`, {
    language: {
      search: "",
      searchPlaceholder: "Поиск по таблице...",
      emptyTable: "Ничего не найдено",
      "info": "Показано с _START_ по _END_ из _TOTAL_ записей",
    },
    paging: false,
    autoWidth: true,
    order: [[5, 'desc']],
    responsive: true,
    columns: [
      { width: 'auto'},
      { width: 'auto', className: 'all' }, // https://datatables.net/extensions/responsive/examples/column-control/classes.html
      { width: 'auto'},
      { width: 'auto'},
      { width: '200px'}, // address
      { width: '100px'},
      { width: '100px'},
      { width: '100px'},
      { width: '100px'},
      { width: '100px'},
      { width: '100px'},
    ],
    columnDefs: [
      {
        target: 0, // ID
        visible: false,
        searchable: false
      },
    ]
    /*
    columnDefs: [
      { type: 'html-num-fmt', targets: 4 }, { type: 'num', targets: 5 },
      { targets: [5], orderData: [5, 4] },
      { targets: [4], orderData: [4, 5] },
      { targets: [2], orderData: [2, 4, 5] },
      { targets: [3], orderData: [3, 5, 4] },
      { responsivePriority: 1, targets: 0 },
      { responsivePriority: 1, targets: 4 },
    ],
    */
    //stateSave: true,
  });
}
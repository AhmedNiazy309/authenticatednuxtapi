<template>
<div>
  <div class="container"  v-if="myauth">
     <nuxt-link to="pla">Ahmed</nuxt-link>
<table id="example" class="display" style="width:100%" dir="rtl">
          <thead>
              <tr>
                  <th>المسلسل</th>
                  <th>الاسم</th>
                  <th>الكميه</th>
                  <th>النوع</th>
                  <th>خيارات</th>
                  <th></th>
              </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <input type="text" name="name" id="">
              </td>
              <td>
                <input type="text" name="amount" id="">
              </td>
              <td style="width: 15%;"><select name="Type" id="" disabled>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
              </td>
              <td>
                <a href="" style="color: #00f;">
                  ارسال الي الورشه
                </a>
              </td>
              <td>
                <a href=""
               style="color:#f00"
                data-toggle="modal"
                class="delete-button"
                data-target="#delet">
                    حذف
                </a>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <input type="text" name="name" id="">
              </td>
              <td>
                <input type="text" name="amount" id="">
              </td>
              <td style="width: 15%;"><select name="Type" id="" disabled>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
              </td>
              <td>
                <a href="" style="color: #00f;">
                  ارسال الي الورشه
                </a>
              </td>
              <td>
                <a href=""
               style="color:#f00"
                data-toggle="modal"
                class="delete-button"
                data-target="#delet">
                    حذف
                </a>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <input type="text" name="name" id="">
              </td>
              <td>
                <input type="text" name="amount" id="">
              </td>
              <td style="width: 15%;"><select name="Type" id="" disabled>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
              </td>
              <td>
                <a href="" style="color: #00f;">
                  ارسال الي الورشه
                </a>
              </td>
              <td>
                <a href=""
               style="color:#f00"
                data-toggle="modal"
                class="delete-button"
                data-target="#delet">
                    حذف
                </a>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                <input type="text" name="name" id="">
              </td>
              <td>
                <input type="text" name="amount" id="">
              </td>
              <td style="width: 15%;"><select name="Type" id="" disabled>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
              </td>
              <td>
                <a href="" style="color: #00f;">
                  ارسال الي الورشه
                </a>
              </td>
              <td>
                <a href=""
               style="color:#f00"
                data-toggle="modal"
                class="delete-button"
                data-target="#delet">
                    حذف
                </a>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                <input type="text" name="name" id="">
              </td>
              <td>
                <input type="text" name="amount" id="">
              </td>
              <td style="width: 15%;"><select name="Type" id="" disabled>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
              </td>
              <td>
                <a href="" style="color: #00f;">
                  ارسال الي الورشه
                </a>
              </td>
              <td>
                <a href=""
               style="color:#f00"
                data-toggle="modal"
                class="delete-button"
                data-target="#delet">
                    حذف
                </a>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>
                <input type="text" name="name" id="">
              </td>
              <td>
                <input type="text" name="amount" id="">
              </td>
              <td style="width: 15%;"><select name="Type" id="" disabled>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
              </td>
              <td>
                <a href="" style="color: #00f;">
                  ارسال الي الورشه
                </a>
              </td>
              <td>
                <a href=""
               style="color:#f00"
                data-toggle="modal"
                class="delete-button"
                data-target="#delet">
                    حذف
                </a>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>
                <input type="text" name="name" id="">
              </td>
              <td>
                <input type="text" name="amount" id="">
              </td>
              <td style="width: 15%;"><select name="Type" id="" disabled>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
              </td>
              <td>
                <a href="" style="color: #00f;">
                  ارسال الي الورشه
                </a>
              </td>
              <td>
                <a href=""
               style="color:#f00"
                data-toggle="modal"
                class="delete-button"
                data-target="#delet">
                    حذف
                </a>
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>
                <input type="text" name="name" id="">
              </td>
              <td>
                <input type="text" name="amount" id="">
              </td>
              <td style="width: 15%;"><select name="Type" id="" disabled>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
              </td>
              <td>
                <a href="" style="color: #00f;">
                  ارسال الي الورشه
                </a>
              </td>
              <td>
                <a href=""
               style="color:#f00"
                data-toggle="modal"
                class="delete-button"
                data-target="#delet">
                    حذف
                </a>
              </td>
            </tr>
        </tbody>
        </table>
      <a href="#" class="btn btn-success add" data-toggle="modal" data-target="#Add">اضافه</a>
    <section class="all-moadels">
      <div
        class="modal fade"
        id="Add"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog  text-center" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">اضافة ماده خام</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form method="POST" class="mx-auto" autocomplete="off" login-form>

              <div class="form-group">
                <label for="name">الاسم</label>
                <input
                  type="text"
                  name="name"
                  class="form-control user-login-input"
                  id="name"
                  required
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="form-group">
                <label for="amount">الكمية</label>
                <input
                  type="text"
                  name="amount"
                  class="form-control user-login-input"
                  id="amount"
                  required
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="form-group">
                <label for="type">النوع</label>
                <input
                  type="text"
                  name="type"
                  class="form-control user-login-input"
                  id="type"
                  required
                  aria-describedby="emailHelp"
                />
              </div>
              </form>
            </div>
            <div class="modal-footer text-center">
              <a href="materialstore.html" class="ok-button text-center btn" type="submit" data-dismiss="modal" aria-label="Close">
                تأكيد
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
      class="modal fade delete-modal"
      id="delet"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-center w-100">حذف</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h5 class="w-100 text-center">هل تريد الحذف بالتاكيد</h5>
          </div>
          <div class="modal-footer">
            <button
              class="float-left w-100 confirm-delete"
              data-dismiss="modal"
              aria-label="Close"
            >
              تأكيد
            </button>
            <button
              class="text-center w-100"
              data-dismiss="modal"
              aria-label="Close"
            >
              تراجع
            </button>
          </div>
        </div>
      </div>
    </div>

    </section>
    </div>
        <p v-else>
      Please
      <NuxtLink to="/">
        login
      </NuxtLink>.
    </p>
</div>
</template>
<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
        name: "index",
    middleware: 'authenticated',

data() {
          return {
              dataTable: null,
              externalLoaded: false,
                  myauth : localStorage.getItem("auth")

          }
        },
        mounted() {
          console.log('table mounted');
            if(this.dataTable === null){
                this.onScriptLoaded();
            }
        },
        methods: {
            onScriptLoaded() {
                this.externalLoaded = true;
                console.log('script loaded');
var table = $('#example').DataTable({
    dom: "B<'row'<'col-sm-6 col-md-6'f><'ml-3'l>>rtip",
    "paging":   false,
    "ordering": false,
    "info":     false,
    "scrollX": true,
    fields: [
        {
            label: 'First name:',
            name: 'first_name'
        },
        {
            label: 'Last name:',
            name: 'last_name'
        },
        {
            label: 'City:',
            name: 'city'
        },
        {
            label: 'Description:',
            name: 'description',
            type: 'qr'
        }
    ],

        buttons: [
            {
                extend: "print",
                  exportOptions: {
                      columns: ":visible",
                      autoPrint: true,
                      orientation: "landscape",
                  },
                  text:      '<img src="../img/print.png" class="img-fluid">',
                },
{
        extend:    'csvHtml5',
        text:      '<img src="../img/csv.ico" class="img-fluid">',
        titleAttr: 'CSV'
    },
    {
        extend:    'pdfHtml5',
        text:      '<img src="../img/pdf.png" class="img-fluid">',
        titleAttr: 'PDF'
    },
    {
        extend:    'excelHtml5',
        text:      '<img src="../img/excel.png" class="img-fluid">',
        titleAttr: 'Excel'
    },
    {
        extend:    'copyHtml5',
        text:      '<img src="../img/copy.ico" class="img-fluid">',
        titleAttr: 'Copy'
    }
],
    "language": {
    search: '<strong style="display:none">البحث</strong>',
    searchPlaceholder: 'بحث',
    },
    });
    $('.delete-button').click(function() {
        // selectedRow = $(this).closest('tr');
        // console.log(selectedRow);
        // idSelectedRow = $(this).closest('tr').find(".hide_column").text();
        // console.log(idSelectedRow);
        // $('.confirm-delete').click(function() {
        //    selectedRow.remove();
        // })
        console.log($(this).closest('tr'));
    });
    $(".show_hide").click(function(e){
    e.preventDefault();
    $(this).toggleClass("active");
    if($(this).hasClass("active")){
    $(".txt").attr("type","text");
    $( ".show_hide" ).addClass( "fa-eye-slash" ).removeClass("fa-eye");
    }else{
    $(".txt").attr("type","password");
    $( ".show_hide" ).addClass( "fa-eye" ).removeClass("fa-eye-slash");
    }
    })
            },
            update() {
                let indexes = this.dataTable
                            .rows()
                            .indexes()
                            .filter(( value, index ) =>  {
                                return 'Ashton Cox' === this.dataTable.row(value).data()[0];
                            } );

                if(!indexes[0]){
                    console.log('No such item');
                    return;
                }
                // console.log(indexes[0]);

                // Get the row for indexes[0]
                let row = this.dataTable.row(indexes[0]);

                // Get the data for the row
                let data = row.data();

                // Change the position to `Engineer`
                data[1] = 'Software Engineer';
                data[5] = '$256,811';
                // Update the table data and redraw the table
                row.data( data ).draw();
            }
        }

}
</script>

<style>
.table-container {
  background-color: #fff;
  box-shadow: 0px 6px 14px -6px rgba(24, 39, 75, 0.12), 0px 10px 32px -4px rgba(24, 39, 75, 0.1);
  border-radius: 10px;
  position: relative;
  margin-top: 1rem;
}
.table-container select {
  padding: 2px !important;
  width: 4rem !important;
  text-align: center !important;
  margin: 0 6px !important;
}
.table-container h4 {
  padding: 1rem;
}
.table-container .the-table {
  border: none;
  padding-bottom: 10px;
}
.table-container .dataTables_wrapper {
  padding: 10px !important;
  color: #242424;
}
.table-container .dataTables_wrapper .dt-buttons {
  padding-left: 15px !important;
  padding-bottom: 15px;
}
.table-container .dataTables_wrapper .dt-buttons .dt-button {
  color: #fd7b38;
}
.table-container .dataTables_wrapper .dataTables_filter,
.table-container .dataTables_wrapper .dataTables_filter input {
  color: #fd7b38 !important;
}
.table-container .dataTables_wrapper .dataTables_wrapper .dataTables_paginate .paginate_button.disabled,
.table-container .dataTables_wrapper .dataTables_wrapper .dataTables_paginate .paginate_button.disabled:hover,
.table-container .dataTables_wrapper .dataTables_wrapper .dataTables_paginate .paginate_button.disabled:active {
  color: #fd7b38 !important;
}
.table-container .dataTables_wrapper .dataTables_info {
  color: #fd7b38 !important;
}
.table-container .dataTables_wrapper th {
  color: #242424;
}
.table-container .dataTables_wrapper .sorting_desc,
.table-container .dataTables_wrapper .sorting,
.table-container .dataTables_wrapper .sorting_asc {
  border-top: 1px solid #ddd;
  color: #242424;
  border-bottom: 1px solid #ddd;
  background-color: rgba(253, 123, 56, 0.2);
}
.table-container .dataTables_wrapper .dataTables_length {
  text-align: center;
}
.table-container .hide_column {
  display: none;
}

.styled-table {
  overflow: auto;
}
.styled-table tr:nth-child(even) {
  background-color: #f7f6f4;
}
.styled-table td {
  padding: 12px 15px;
}
.styled-table td:last-child {
  display: none;
}

button {
  padding: 0.5rem 1rem;
  border-radius: 5px;
  left: 1rem;
  top: 0rem;
  background-color: #fd7b38;
  color: #fff;
  border: none;
  font-size: 15px;
}

.ok-button {
  background-color: #27AE60;
}

.refuse-button {
  background-color: #EB5757;
}

.show-button {
  background-color: #2F80ED;
}

.delete-modal .modal-header h5 {
  color: #EB5757;
}
.delete-modal .modal-body p {
  font-size: 14px;
}
.delete-modal .modal-footer .confirm-delete {
  background-color: #EB5757;
}

input {
  background-color: #f8f8f8 !important;
  border: none !important;
  color: #242424;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none !important;
  background: url("./images/selectarrow.svg") #fd7b38 no-repeat 0 !important;
  /* Better placement regardless of input width */
  background-color: #f8f8f8 !important;
  color: #242424;
}

label {
  color: #fd7b38 !important;
  font-weight: bold !important;
}

aside {
  position: fixed !important;
  width: 200px;
  height: 200px;
  margin-right: 1.8rem;
  margin-top: 0.8rem;
  display: inline-block;
  height: 1045px;
  background: #ffffff;
  /* main shadow */
  box-shadow: 0px 6px 14px -6px rgba(24, 39, 75, 0.12), 0px 10px 32px -4px rgba(24, 39, 75, 0.1);
  border-radius: 10px;
}
aside .logo {
  color: #242424;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 2rem;
  line-height: 2;
}
aside .main-pages ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
aside .main-pages ul li {
  padding: 0.5rem;
  color: #65676d;
  cursor: pointer;
}
aside .main-pages ul li.active {
  background: rgba(253, 123, 56, 0.2);
  color: #fd7b38;
}

header {
  position: fixed !important;
  top: 0.8rem;
  left: 3rem;
  height: 3rem;
  background: #ffffff;
  /* main shadow */
  box-shadow: 0px 6px 14px -6px rgba(24, 39, 75, 0.12), 0px 10px 32px -4px rgba(24, 39, 75, 0.1);
  border-radius: 10px;
  z-index: 5;
}
header .header-search input {
  background: #f8f8f8;
  border-radius: 5px;
  border: none;
  position: absolute;
  top: 0.5rem;
  height: 2rem;
  width: 17rem;
}
header .header-search input:focus {
  outline: #fd7b38;
  border: 1px solid #fd7b38;
}
header .header-search input::placeholder {
  position: absolute;
  color: #242424;
  opacity: 1;
  padding-right: 2rem;
}
header .header-search .fa-search {
  color: #242424;
  transform: rotate(90deg);
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  z-index: 2;
}
header .admin-photo {
  position: absolute;
  width: 2rem;
  height: 2rem;
  left: 4rem;
  top: 0.5rem;
  border-radius: 50%;
  background: url(./images/41688312_2237125146316321_1931414181324521472_o.jpg);
  background-size: cover;
  /* main */
  z-index: 5;
  border: 1px solid #fd7b38;
}
header .admin-login-settings {
  position: absolute;
  left: 2rem;
  top: 0.5rem;
}
header .admin-login-settings .fa-ellipsis-v {
  color: #242424;
  margin-top: 0.3rem;
  font-size: 1.3rem;
}

section .buttons {
  position: absolute;
  top: 5rem;
  left: 2rem;
}
section .buttons button:nth-child(1) {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem 1rem;
  position: absolute;
  border-radius: 5px;
  right: 0rem;
  top: 0rem;
  background-color: #fd7b38;
  color: #fff;
  border: none;
  font-size: 15px;
}
section .buttons button:nth-child(2) {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem 1rem;
  position: absolute;
  border-radius: 5px;
  right: 10rem;
  top: 0rem;
  background-color: #fd7b38;
  color: #fff;
  border: none;
  font-size: 15px;
}
section .buttons button:nth-child(3) {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem 1rem;
  position: absolute;
  border-radius: 5px;
  left: 1rem;
  top: 0rem;
  background-color: #fd7b38;
  color: #fff;
  border: none;
  font-size: 15px;
}

.layers {
  position: absolute;
  width: 100%;
  left: -29%;
  top: 9rem;
}

body {
  box-sizing: border-box;
  height: 5000px;
  font-family: "Tajawal", "Times New Roman", Times, serif;
  background-color: #f7f6f4;
}
body article .now-lesson {
  background-color: #fff;
  height: 14rem;
  box-shadow: 0px 6px 14px -6px rgba(24, 39, 75, 0.12), 0px 10px 32px -4px rgba(24, 39, 75, 0.1);
  border-radius: 10px;
  position: relative;
}
body article .now-lesson .svg-content {
  text-align: center;
}
body article .now-lesson h4 {
  padding: 1rem;
}
body article .now-lesson .group-element-now {
  position: absolute;
  background-color: rgba(253, 123, 56, 0.2);
  border-radius: 5px;
  right: 2rem;
  top: 5rem;
  padding: 0.5rem 1.5rem;
}
body article .now-lesson .students-menu {
  position: absolute;
  right: 15rem;
  top: 58%;
  cursor: pointer;
}
body article .now-lesson .attendance-menu {
  position: absolute;
  right: 25rem;
  top: 58%;
  cursor: pointer;
}
body article .now-lesson .make-exam {
  position: absolute;
  right: 40rem;
  top: 5rem;
  font-size: 1.3rem;
}
body article .now-lesson .make-exam .fa-sticky-note {
  font-size: 7rem;
  color: #fd7b38;
}
body article .now-lesson .make-vote {
  position: absolute;
  right: 50rem;
  top: 5rem;
  font-size: 1.3rem;
}
body article .now-lesson .make-vote .fa-poll {
  font-size: 7rem;
  color: #fd7b38;
}
body article .now-lesson .share-file {
  position: absolute;
  right: 60rem;
  top: 5rem;
  font-size: 1.3rem;
}
body article .now-lesson .share-file .fa-file-medical {
  font-size: 7rem;
  color: #fd7b38;
}
body article .today-lessons {
  background-color: #fff;
  height: 14rem;
  box-shadow: 0px 6px 14px -6px rgba(24, 39, 75, 0.12), 0px 10px 32px -4px rgba(24, 39, 75, 0.1);
  border-radius: 10px;
  position: relative;
  margin-top: 1rem;
}
body article .today-lessons h4 {
  padding: 1rem;
}
body article .today-lessons .group-element {
  position: absolute;
  background-color: #f8f8f8;
  border-radius: 5px;
  right: 15rem;
  top: 5rem;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
}
body article .today-lessons div:nth-child(2) {
  right: 2rem;
  top: 5rem;
}
body article .today-lessons div:nth-child(3) {
  right: 28rem;
}
body article .today-lessons div:nth-child(4) {
  right: 41rem;
}
body article .today-lessons div:nth-child(5) {
  right: 54rem;
}
body article .today-lessons .group-element-select {
  position: absolute;
  background-color: rgba(253, 123, 56, 0.2);
}
</style>

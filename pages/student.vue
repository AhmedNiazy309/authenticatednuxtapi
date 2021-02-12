<template>
  <div>
  <div dir="rtl">
    <div v-if="myauth">
    <div class="row">
      <aside class="col-md-2">
    <div class="logo">
      <p>أحمد السوليه</p>
    </div>
    <div class="main-pages">
      <ul>
        <li>
        <nuxt-link to="home">
          <i class="fas fa-house-user mr-1"></i> الصفحة الرئيسية
        </nuxt-link>
        </li>
        <li class="active">
        <nuxt-link to="student">
           <i class="fas fa-users mr-1"></i> الطلاب
            </nuxt-link>
                    </li>

        <li>
        <nuxt-link to="group">
        <i class="fas fa-layer-group mr-1"></i> المجموعات
        </nuxt-link>
        </li>
        <li><i class="far fa-calendar-alt mr-1"></i> المواعيد</li>
        <li>
        <nuxt-link to="question">
        <i class="far fa-sticky-note mr-1"></i> الاختبارات
           </nuxt-link>
           </li>
        <li><i class="fas fa-cog mr-1"></i> الاعدادات</li>
        <li @click="logout" > <i class="fas fa-sign-out-alt"></i> خروج </li>
      </ul>
    </div>
  </aside>
    <header class="col-md-9">
    <div class="row">
      <div class="header-search col-md-3">
        <i class="fas fa-search"></i>

        <input type="search" name="header_search" id="headersearch" placeholder="بحث" />
      </div>

      <div class="col-md-7"></div>

      <div class="col-md-2">
        <div class="admin-photo"></div>
        <div class="admin-login-settings">
          <i class="fas fa-ellipsis-v"></i>
        </div>
      </div>
    </div>
  </header>
  <section>
    <div class="col-md-9 buttons">
      <button data-toggle="modal" data-target="#AddStudent">
        اضافة طالب
      </button>
      <button data-toggle="modal" data-target="#paymentStudent">تسديد مدفوعات</button>
      <button data-toggle="modal" data-target="#attendanceStudent">تسجيل حضور</button>
    </div>

  </section>

  <section class="all-moadels">
    <!-- Add Model -->
    <div
      class="modal fade"
      id="AddStudent"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-center w-100">بيانات الطالب</h5>
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
            <form  method="POST" class="mx-auto w-100 mt-5" autocomplete="off" login-form>

            <div class="form-group">
              <label for="studentname">اسم الطالب</label>
              <input
                type="text"
                name="student_name"
                class="form-control user-login-input w-100"
                id="studentname"
                required
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group">
              <label for="studentphone">رقم الهاتف</label>
              <input
                type="number"
                name="student_phone"
                class="form-control user-login-input w-100"
                id="studentphone"
                required
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group">
              <label for="studentlevel">الصف</label>
              <select
                class="form-control"
                id="studentlevel"
                name="student_level"
                required
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-group">
              <label for="studentgroup">المجموعة</label>
              <select
                class="form-control"
                id="studentgroup"
                name="student_grou["
                required
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-group">
              <label for="studentaddress">العنوان</label>
              <input
                type="text"
                name="student_address"
                class="form-control w-100"
                id="studentaddress"
                required
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">كلمة السر</label>
              <input
                type="password"
                name="password"
                required
                class="form-control w-100"
                id="exampleInputPassword1"
              />
            </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              class="ok-button text-center w-100"
              type="submit"
              data-dismiss="modal"
              aria-label="Close"
            >
              اضافة
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- ----- -->

    <!-- Payment Modal -->

    <div
      class="modal fade"
      id="paymentStudent"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-center w-100">تسديد مدفوعات</h5>
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
            <form

              method="POST"
              class="mx-auto w-100 mt-5"
              autocomplete="off"
              login-form
            >
              <div class="form-group">
                <label for="studentlevelpaymentmodal">الصف</label>
                <select
                  class="form-control"
                  id="studentlevelpaymentmodal"
                  name="student_level"
                  required
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div class="form-group">
                <label for="studentgrouppaymentmodal">المجموعة</label>
                <select
                  class="form-control"
                  id="studentgrouppaymentmodal"
                  name="student_group"
                  required
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div class="form-group">
                <label for="studentphonepaymentmodal">رقم الهاتف</label>
                <input
                  type="number"
                  list="studentphoneoptionpaymentmodal"
                  id="studentphonepaymentmodal"
                  name="student_phone"
                  class="w-100"
                  autocomplete="off"
                />

                <datalist id="studentphoneoptionpaymentmodal">
                  <option value="01002817639"></option>
                  <option value="01004340804"></option>
                  <option value="01067803033"></option>
                  <option value="01006655656"></option>
                  <option value="01051561232"></option>
                </datalist>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              class="ok-button text-center w-100"
              type="submit"
              data-dismiss="modal"
              aria-label="Close"
            >
              تسديد
            </button>
          </div>
        </div>
      </div>
    </div>


    <!-- Attendance Modal -->

    <div
      class="modal fade"
      id="attendanceStudent"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-center w-100">تسجيل حضور</h5>
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
            <form

              method="POST"
              class="mx-auto w-100 mt-5"
              autocomplete="off"
              login-form
            >
              <div class="form-group">
                <label for="studentlevelattendancemodal">الصف</label>
                <select
                  class="form-control"
                  id="studentlevelattendancemodal"
                  name="student_level"
                  required
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div class="form-group">
                <label for="studentgroupattendancemodal">المجموعة</label>
                <select
                  class="form-control"
                  id="studentgroupattendancemodal"
                  name="student_group"
                  required
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div class="form-group">
                <label for="studentphoneattendancemodal">رقم الهاتف</label>
                <input
                  type="number"
                  list="studentnumber"
                  id="studentphoneattendancemodal"
                  name="student_phone"
                  class="w-100"
                  autocomplete="off"
                />

                <datalist id="studentnumberattendancemodal">
                  <option value="01002817639"></option>
                  <option value="01004340804"></option>
                  <option value="01067803033"></option>
                  <option value="01006655656"></option>
                  <option value="01051561232"></option>
                </datalist>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              class="ok-button text-center w-100"
              type="submit"
              data-dismiss="modal"
              aria-label="Close"
            >
              تسجيل حضور
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- ---------------- -->


    <!-- Delete Model -->
    <div
      class="modal fade delete-modal"
      id="deletestudent"
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
            <h5 class="w-100 text-center">هل تريد حذف الطالب بالفعل</h5>
            <p class="w-100 text-center">
              في حال حذف الطالب لا يمكن التراجع وسوف يتم فقد كل البيانات
              الخاصة به
            </p>
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
    <!-- ------------ -->

    <!-- Refuse Modal -->

    <div
    class="modal fade delete-modal"
    id="refusestudent"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-center w-100">رفض</h5>
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
          <h5 class="w-100 text-center">هل تريد رفض الطالب بالفعل</h5>
          <p class="w-100 text-center">
            في حال رفض الطالب لا يمكن التراجع وسوف يتم فقد كل البيانات
            الخاصة به
          </p>
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

    <!-- ------------ -->
        <!-- ............. -->

  </section>
  <article class="col-md-9">
    <div class="layers">
      <div class="table-container">
        <h4>طلبات اضافة معلقة</h4>

        <table id="pendingrequeststable" class="display the-table w-100">
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Office</th>
              <th>Age</th>
              <th>Start date</th>
              <th>Salary</th>
              <th>hfgdg</th>
              <th>id</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011/04/25</td>
              <td><button class="ok-button">قبول</button></td>
              <td>
                <button
                  class="refuse-button"
                  data-toggle="modal"
                  data-target="#refusestudent"
                >
                  رفض
                </button>
              </td>
              <td>1</td>
            </tr>
            <tr>
              <td>hhhhh Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011/04/25</td>
              <td><button class="ok-button">قبول</button></td>

              <td>
                <button
                  class="refuse-button"
                  data-toggle="modal"
                  data-target="#refusestudent"
                >
                  رفض
                </button>
              </td>
              <td>1</td>
            </tr>
            <tr>
              <td>eeeeee Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011/04/25</td>
              <td><button class="ok-button">قبول</button></td>

              <td>
                <button
                  class="refuse-button"
                  data-toggle="modal"
                  data-target="#refusestudent"
                >
                  رفض
                </button>
              </td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="table-container">
        <h4>قوائم الطلاب</h4>

        <div class="form-group col-md-2">
          <label for="studentlevel">الصف</label>
          <select
            class="form-control"
            id="studentlevel"
            name="student_level"
            required
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="form-group col-md-2">
          <label for="studentgroup">المجموعة</label>
          <select
            class="form-control"
            id="studentgroup"
            name="student_grou["
            required
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <table id="studentmenutable" class="display the-table w-100">
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Office</th>
              <th>Age</th>
              <th>Start date</th>
              <th>Salary</th>
              <th>id</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011/04/25</td>
              <td>
                <button
                  class="delete-button"
                  data-toggle="modal"
                  data-target="#deletestudent"
                >
                  حذف الطالب
                </button>
              </td>
              <td>1</td>
            </tr>
            <tr>
              <td>hhhhh Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011/04/25</td>
              <td>
                <button
                  class="delete-button"
                  data-toggle="modal"
                  data-target="#deletestudent"
                >
                  حذف الطالب
                </button>
              </td>
              <td>1</td>
            </tr>
            <tr>
              <td>eeeeee Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011/04/25</td>
              <td>
                <button
                  class="delete-button"
                  data-toggle="modal"
                  data-target="#deletestudent"
                >
                  حذف الطالب
                </button>
              </td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </article>

    </div>
    </div>
    <p v-else>
      Please
      <NuxtLink to="/">
        login
      </NuxtLink>.
    </p>
  </div>

  </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined;
export default {
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
                        logout () {
      console.log(123);
      localStorage.removeItem("auth")
      //this.$store.commit('setAuth', null)
      this.$router.push("/");
    },
            onScriptLoaded() {
                this.externalLoaded = true;
                console.log('script loaded');
  $('#pendingrequeststable').DataTable({
    dom: "B<'row'<'col-sm-12 col-md-6'f><'ml-3'l>>rtip",
    "lengthMenu": [[5, 10, 15, -1], [5, 10, 15,  "All"]],
    buttons: [

      {
          extend: "print",
          exportOptions: {
              columns: ":visible",
              autoPrint: true,
              orientation: "landscape",
          },
      },
      {
          extend: "csv",
          exportOptions: {
              columns: ":visible",
              autoPrint: true,
              orientation: "landscape",
          },
      },
      {
          extend: "excel",
          exportOptions: {
              columns: ":visible",
              autoPrint: true,
              orientation: "landscape",
          },
      },
      // {
      //   extend: "pdf",
      //   exportOptions: {
      //     columns: ":visible",
      //     autoPrint: true,
      //     orientation: "landscape",
      //   },
      // },
      {
          extend: "copy",
          exportOptions: {
              columns: ":visible",
              autoPrint: true,
              orientation: "landscape",
          },
      },
      "colvis",
  ],
    "language": {
      search: '<strong style="padding:5px">البحث</strong>',
      searchPlaceholder: 'بحث',
      "paginate": {
        "next": "التالي",
        "previous": "السابق"
      }
    },
    columnDefs: [{
      targets: [-1],
      className: "hide_column"
  }]
  });
  $('#studentmenutable').DataTable({
    dom: "B<'row'<'col-sm-12 col-md-6'f><'ml-3'l>>rtip",
    "lengthMenu": [[5, 10, 15, -1], [5, 10, 15,  "All"]],
    buttons: [

      {
          extend: "print",
          exportOptions: {
              columns: ":visible",
              autoPrint: true,
              orientation: "landscape",
          },
      },
      {
          extend: "csv",
          exportOptions: {
              columns: ":visible",
              autoPrint: true,
              orientation: "landscape",
          },
      },
      {
          extend: "excel",
          exportOptions: {
              columns: ":visible",
              autoPrint: true,
              orientation: "landscape",
          },
      },
      // {
      //   extend: "pdf",
      //   exportOptions: {
      //     columns: ":visible",
      //     autoPrint: true,
      //     orientation: "landscape",
      //   },
      // },
      {
          extend: "copy",
          exportOptions: {
              columns: ":visible",
              autoPrint: true,
              orientation: "landscape",
          },
      },
      "colvis",
  ],
    "language": {
      search: '<strong style="padding:5px">البحث</strong>',
      searchPlaceholder: 'بحث',
      "paginate": {
        "next": "التالي",
        "previous": "السابق"
      }
    },
    columnDefs: [{
      targets: [-1],
      className: "hide_column"
  }]
  });

  $('.refuse-button').click(function() {
  var  selectedRow = $(this).closest('tr');
   var idSelectedRow = $(this).closest('tr').find(".hide_column").text();
    console.log(idSelectedRow);
    $('.confirm-delete').click(function() {
      selectedRow.remove();
      // $('#deletestudent').hide();
    })
});
$('.delete-button').click(function() {
  var selectedRow = $(this).closest('tr');
  var idSelectedRow = $(this).closest('tr').find(".hide_column").text();

  $('.confirm-delete').click(function() {
    selectedRow.remove();
    // $('#deletestudent').hide();
  })
});
$('.ok-button').click(function() {
  var selectedRow = $(this).closest('tr');
  var idSelectedRow = $(this).closest('tr').find(".hide_column").text();
  selectedRow.remove();

});

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

<style scoped>
.row{
text-align: right;
}
aside .main-pages ul li a{
  color: inherit;
}
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
  margin: 0;
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
  height: 4em;
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
  background: url(./images/Ahmed.jpg);
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
  top: 6rem;
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
  font-family: "Tajawal", "Times New Roman", Times, serif;
  background-color: #f7f6f4;
}

</style>

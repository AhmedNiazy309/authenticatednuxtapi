<template>
  <div class="lab" dir="rtl">
    <div v-if="myauth">
    <div class="row">
      <aside class="col-md-2">
    <div class="logo">
      <p>أحمد السوليه</p>
    </div>
    <div class="main-pages">
      <ul>
        <li class="active">
        <nuxt-link to="home">
          <i class="fas fa-house-user mr-1"></i> الصفحة الرئيسية
          </nuxt-link>
        </li>
        <li>
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
    <!-- <header class="col-md-8">
    <div class="row">
      <div class="header-search col-md-3 col-sm-2  ml-8">
        <i class="fas fa-search"></i>

        <input type="search" name="header_search" id="headersearch" placeholder="بحث" />
      </div>

      <div class="col-md-2">
        <div class="admin-photo"></div>
        <div class="admin-login-settings">
          <i class="fas fa-ellipsis-v"></i>
        </div>
      </div>
    </div>
  </header> -->
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
        <button data-toggle="modal" data-target="#paymentStudent">
          تسديد مدفوعات
        </button>
        <button data-toggle="modal" data-target="#attendanceStudent">
          تسجيل حضور
        </button>
      </div>
    </section>

    <!-- -------------------- -->

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
              <form

                method="POST"
                class="mx-auto w-100 mt-5"
                autocomplete="off"
                login-form
              >
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

      <!-- ............. -->
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

      <!-- Student Show Modal -->

      <div
        class="modal fade"
        id="studentmenu"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-center w-100">قائمة الطلاب</h5>
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
              <table class="styled-table w-100">
                <tbody>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>hhhhh Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>

                    <td>1</td>
                  </tr>
                  <tr>
                    <td>eeeeee Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>

                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="modal-footer">
              <button
                class="text-center w-100"
                data-dismiss="modal"
                aria-label="Close"
              >
                غلق
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- ------------------ -->

      <!-- Attendance Show Menu -->

      <div
        class="modal fade"
        id="attendancemenu"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-center w-100">قائمة الحضور</h5>
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
              <table class="styled-table w-100">
                <tbody>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>hhhhh Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>

                    <td>1</td>
                  </tr>
                  <tr>
                    <td>eeeeee Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>

                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="modal-footer">
              <button
                class="text-center w-100"
                data-dismiss="modal"
                aria-label="Close"
              >
                غلق
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- -------------------- -->
    </section>

    <!-- ------------------- -->

    <article class="col-md-9">
      <div class="layers">
        <div class="now-lesson">
          <h4>الحصة الحالية</h4>
          <div class="group-element-now">
            <p>الصف الثاني الثانوي</p>
            <p>مجموعة 4</p>
          </div>
          <div
            class="students-menu"
            data-toggle="modal"
            data-target="#studentmenu"
          >
            <img src="./images/group 1.svg">
            <p>قائمة الطلاب</p>
          </div>
          <div
            class="attendance-menu"
            data-toggle="modal"
            data-target="#attendancemenu"
          >
          <img src="./images/Union.svg">
            <p>قائمة الحضور</p>
          </div>
          <div class="make-exam">
            <div class="svg-content">
              <svg
                width="55.5"
                height="67.5"
                viewBox="0 0 37 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M36.1412 11.683L24.8443 0.386191C24.5972 0.138955 24.2618 0 23.9121 0H4.84866C2.17512 0 0 2.17512 0 4.84857V40.1513C0 42.8249 2.17512 45 4.84857 45H31.6788C34.3523 45 36.5273 42.8249 36.5273 40.1513V12.6152C36.5273 12.2656 36.3885 11.9303 36.1412 11.683ZM25.2305 4.50114L32.0261 11.2968H27.4424C26.2228 11.2968 25.2305 10.3046 25.2305 9.0849V4.50114ZM31.6788 42.3633H4.84857C3.629 42.3633 2.63672 41.371 2.63672 40.1513V4.84857C2.63672 3.629 3.629 2.63672 4.84857 2.63672H22.5937V9.0849C22.5937 11.7584 24.7688 13.9336 27.4424 13.9336H33.8906V40.1513C33.8906 41.371 32.8984 42.3633 31.6788 42.3633ZM12.6153 19.7695H6.9668C6.23871 19.7695 5.64844 20.3598 5.64844 21.0879V26.7363C5.64844 27.4644 6.23871 28.0547 6.9668 28.0547H12.6153C13.3434 28.0547 13.9336 27.4644 13.9336 26.7363V21.0878C13.9336 20.3597 13.3434 19.7695 12.6153 19.7695ZM11.2969 25.418H8.28516V22.4061H11.2969V25.418ZM6.9668 31.0664H12.6153C13.3434 31.0664 13.9336 31.6567 13.9336 32.3848V38.0333C13.9336 38.7614 13.3434 39.3516 12.6153 39.3516H6.9668C6.23871 39.3516 5.64844 38.7614 5.64844 38.0333V32.3848C5.64844 31.6567 6.23871 31.0664 6.9668 31.0664ZM8.28516 36.7148H11.2969V33.7031H8.28516V36.7148ZM16.9453 21.0879C16.9453 21.8159 17.5356 22.4062 18.2637 22.4062H23.9121C24.6402 22.4062 25.2305 21.8159 25.2305 21.0879C25.2305 20.3598 24.6402 19.7695 23.9121 19.7695H18.2637C17.5356 19.7695 16.9453 20.3597 16.9453 21.0879ZM18.2637 25.418H29.5605C30.2886 25.418 30.8789 26.0082 30.8789 26.7363C30.8789 27.4644 30.2886 28.0547 29.5605 28.0547H18.2637C17.5356 28.0547 16.9453 27.4644 16.9453 26.7363C16.9453 26.0082 17.5356 25.418 18.2637 25.418ZM18.2637 33.7032H23.9121C24.6402 33.7032 25.2305 33.1129 25.2305 32.3848C25.2305 31.6567 24.6402 31.0664 23.9121 31.0664H18.2637C17.5356 31.0664 16.9453 31.6567 16.9453 32.3848C16.9453 33.1129 17.5356 33.7032 18.2637 33.7032ZM18.2637 36.7148H29.5605C30.2886 36.7148 30.8789 37.3051 30.8789 38.0332C30.8789 38.7613 30.2886 39.3515 29.5605 39.3515H18.2637C17.5356 39.3515 16.9453 38.7613 16.9453 38.0332C16.9453 37.3051 17.5356 36.7148 18.2637 36.7148ZM6.9668 9.69724H14.0273C14.7554 9.69724 15.3457 9.10696 15.3457 8.37888C15.3457 7.65079 14.7554 7.06052 14.0273 7.06052H6.9668C6.23871 7.06052 5.64844 7.65079 5.64844 8.37888C5.64844 9.10696 6.23871 9.69724 6.9668 9.69724ZM18.2636 15.3457H6.9668C6.23871 15.3457 5.64844 14.7554 5.64844 14.0273C5.64844 13.2993 6.23871 12.709 6.9668 12.709H18.2636C18.9917 12.709 19.582 13.2993 19.582 14.0273C19.582 14.7554 18.9917 15.3457 18.2636 15.3457Z"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="-5.85012"
                    y1="-9.26418"
                    x2="51.2139"
                    y2="3.47501"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF8008" />
                    <stop offset="1" stop-color="#FFC837" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p class="mt-2">انشاء امتحان</p>
          </div>
          <div class="make-vote">
            <div class="svg-content">
              <svg
                width="78"
                height="67.5"
                viewBox="0 0 97 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.9225 7.05783L38.3822 7.51694L38.8415 7.05757L42.2328 3.66633C43.0863 2.81276 44.4704 2.81276 45.324 3.66633C46.1776 4.5199 46.1776 5.90399 45.324 6.75756L41.427 10.6546L41.0706 11.0109L41.327 11.4448C46.4065 20.0436 44.9616 30.903 37.9315 37.9332C29.3779 46.4868 15.6189 46.4866 7.06523 37.9332C-1.48841 29.3795 -1.48841 15.6203 7.06523 7.06665C11.0259 3.10596 16.4884 0.65 22.4983 0.65C28.5036 0.65 33.9626 3.1023 37.9225 7.05783ZM73.8452 18.9491L74.3048 19.4087L74.7644 18.9491L79.7524 13.9611C80.606 13.1075 81.9901 13.1075 82.8436 13.9611C83.6972 14.8146 83.6972 16.1987 82.8436 17.0523L77.8557 22.0403L77.396 22.4999L77.8557 22.9595L82.8436 27.9475C83.6972 28.8011 83.6972 30.1852 82.8436 31.0387C81.9901 31.8923 80.606 31.8923 79.7524 31.0387L74.7644 26.0508L74.3048 25.5911L73.8452 26.0508L68.8572 31.0387C68.0036 31.8923 66.6195 31.8923 65.766 31.0387C64.9124 30.1852 64.9124 28.8011 65.766 27.9475L70.754 22.9595L71.2136 22.4999L70.754 22.0403L65.766 17.0523C64.9124 16.1987 64.9124 14.8146 65.766 13.9611C66.6195 13.1075 68.0036 13.1075 68.8572 13.9611L73.8452 18.9491ZM14.5449 22.4413L14.0852 22.9009L14.5448 22.4413C13.6913 21.5877 13.6913 20.2037 14.5448 19.3501C15.3984 18.4965 16.7825 18.4965 17.6361 19.3501C17.6361 19.3501 17.6361 19.3501 17.6361 19.3501L21.6327 23.3469L22.0923 23.8066L22.552 23.3469L34.8309 11.068L35.2908 10.6081L34.8305 10.1485C27.9832 3.31154 16.9983 3.31587 10.1561 10.1579L10.1561 10.1579C3.31034 17.0036 3.31034 27.996 10.1561 34.8417C17.002 41.6877 27.9942 41.6875 34.8399 34.8417C40.0439 29.6378 41.4874 21.733 38.2834 15.0234L37.8873 14.1939L37.2373 14.8439L23.6379 28.4433C22.7843 29.2969 21.4002 29.2969 20.5466 28.4433L14.5449 22.4413ZM74.3048 0.65C86.3266 0.65 96.1547 10.4781 96.1547 22.4999C96.1547 34.5217 86.3266 44.35 74.3048 44.35C62.283 44.35 52.4549 34.5219 52.4549 22.5001C52.4549 10.4781 62.283 0.65 74.3048 0.65ZM74.3048 5.02224C64.6963 5.02224 56.8271 12.8914 56.8271 22.4999C56.8271 32.1084 64.6963 39.9776 74.3048 39.9776C83.9133 39.9776 91.7825 32.1084 91.7825 22.4999C91.7825 12.8916 83.9133 5.02224 74.3048 5.02224Z"
                  fill="url(#paint0_linear)"
                  stroke="white"
                  stroke-width="1.3"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="-15.504"
                    y1="-9.26418"
                    x2="102.099"
                    y2="60.3143"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF8008" />
                    <stop offset="1" stop-color="#FFC837" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p class="mt-2">انشاء تصويت</p>
          </div>
          <div class="share-file">
            <div class="svg-content">
              <svg
                width="52.5"
                height="67.5"
                viewBox="0 0 35 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M34.2524 10.9329L23.7058 0.386279C23.4596 0.14001 23.1236 0 22.7734 0H4.31641C2.13558 0 0.361328 1.77425 0.361328 3.95508V41.0449C0.361328 43.2258 2.13558 45 4.31641 45H30.6836C32.8644 45 34.6387 43.2258 34.6387 41.0449V11.8652C34.6387 11.5058 34.4878 11.1682 34.2524 10.9329ZM24.0918 4.50114L30.1375 10.5469H25.4102C24.6832 10.5469 24.0918 9.95546 24.0918 9.22852V4.50114ZM30.6836 42.3633H4.31641C3.58946 42.3633 2.99805 41.7719 2.99805 41.0449V3.95508C2.99805 3.22813 3.58946 2.63672 4.31641 2.63672H21.4551V9.22852C21.4551 11.4093 23.2293 13.1836 25.4102 13.1836H32.002V41.0449C32.002 41.7719 31.4105 42.3633 30.6836 42.3633ZM25.4102 18.6328H9.58984C8.86176 18.6328 8.27148 19.2231 8.27148 19.9512C8.27148 20.6793 8.86176 21.2695 9.58984 21.2695H25.4102C26.1382 21.2695 26.7285 20.6793 26.7285 19.9512C26.7285 19.2231 26.1382 18.6328 25.4102 18.6328ZM9.58984 23.9062H25.4102C26.1382 23.9062 26.7285 24.4965 26.7285 25.2246C26.7285 25.9527 26.1382 26.543 25.4102 26.543H9.58984C8.86176 26.543 8.27148 25.9527 8.27148 25.2246C8.27148 24.4965 8.86176 23.9062 9.58984 23.9062ZM25.4102 29.1797H9.58984C8.86176 29.1797 8.27148 29.77 8.27148 30.498C8.27148 31.2261 8.86176 31.8164 9.58984 31.8164H25.4102C26.1382 31.8164 26.7285 31.2261 26.7285 30.498C26.7285 29.77 26.1382 29.1797 25.4102 29.1797ZM9.58984 34.4531H20.1367C20.8648 34.4531 21.4551 35.0434 21.4551 35.7715C21.4551 36.4996 20.8648 37.0898 20.1367 37.0898H9.58984C8.86176 37.0898 8.27148 36.4996 8.27148 35.7715C8.27148 35.0434 8.86176 34.4531 9.58984 34.4531Z"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="-5.12844"
                    y1="-9.26418"
                    x2="48.7259"
                    y2="2.01788"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF8008" />
                    <stop offset="1" stop-color="#FFC837" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p class="mt-2">مشاركة ملف</p>
          </div>
        </div>
        <div class="today-lessons">
          <h4>حصص اليوم</h4>
          <div class="group-element group-element-select">
            <p>الصف الثاني الثانوي</p>
            <p>مجموعة 4</p>
          </div>
          <div class="group-element">
            <p>الصف الثاني الثانوي</p>
            <p>مجموعة 4</p>
          </div>
          <div class="group-element">
            <p>الصف الثاني الثانوي</p>
            <p>مجموعة 4</p>
          </div>
          <div class="group-element">
            <p>الصف الثاني الثانوي</p>
            <p>مجموعة 4</p>
          </div>
            </div>
        <div class="table-container">
          <h4>المدفوعات المتأخرة</h4>

          <table id="latepaystable" class="display the-table w-100">
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

        <div class="table-container">
          <h4>الغياب المتكرر</h4>

          <table id="absentrepeattable" class="display the-table w-100">
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
</template>
<style scoped>
.row{
  text-align: right;
}
aside{
  margin: 0 !important;
}
aside .main-pages ul li a{
  color: inherit;
}
aside .main-pages ul li a:hover{
  text-decoration: none;
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
.dataTables_length label{
  color: #fd7b38 !important;
  font-weight: bold !important;
}
label {
  color: #fd7b38 !important;
  font-weight: bold !important;
}

aside {
  margin: 0;
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
  height: 4rem;
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
article .now-lesson {
  background-color: #fff;
  height: 14rem;
  box-shadow: 0px 6px 14px -6px rgba(24, 39, 75, 0.12), 0px 10px 32px -4px rgba(24, 39, 75, 0.1);
  border-radius: 10px;
  position: relative;
}
article .now-lesson .svg-content {
  text-align: center;
}
article .now-lesson h4 {
  padding: 1rem;
}
article .now-lesson .group-element-now {
  position: absolute;
  background-color: rgba(253, 123, 56, 0.2);
  border-radius: 5px;
  right: 2rem;
  top: 5rem;
  padding: 0.5rem 1.5rem;
}
article .now-lesson .students-menu {
  position: absolute;
  right: 15rem;
  top: 58%;
  cursor: pointer;
}
article .now-lesson .attendance-menu {
  position: absolute;
  right: 25rem;
  top: 58%;
  cursor: pointer;
}
article .now-lesson .make-exam {
  position: absolute;
  right: 34rem;
  top: 5rem;
  font-size: 1.3rem;
}
article .now-lesson .make-exam .fa-sticky-note {
  font-size: 7rem;
  color: #fd7b38;
}
article .now-lesson .make-vote {
  position: absolute;
  right: 42rem;
  top: 5rem;
  font-size: 1.3rem;
}
article .now-lesson .make-vote .fa-poll {
  font-size: 7rem;
  color: #fd7b38;
}
article .now-lesson .share-file {
  position: absolute;
  right: 50rem;
  top: 5rem;
  font-size: 1.3rem;
}
article .now-lesson .share-file .fa-file-medical {
  font-size: 7rem;
  color: #fd7b38;
}
article .today-lessons {
  background-color: #fff;
  height: 14rem;
  box-shadow: 0px 6px 14px -6px rgba(24, 39, 75, 0.12), 0px 10px 32px -4px rgba(24, 39, 75, 0.1);
  border-radius: 10px;
  position: relative;
  margin-top: 1rem;
}
div#latepaystable_length label{
  color: #fd7b38 !important;
  font-weight: bold !important;
}
article .today-lessons h4 {
  padding: 1rem;
}
article .today-lessons .group-element {
  position: absolute;
  background-color: #f8f8f8;
  border-radius: 5px;
  right: 12rem;
  top: 5rem;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
}
article .today-lessons div:nth-child(2) {
  right: .5rem;
  top: 5rem;
}
article .today-lessons div:nth-child(3) {
  right: 24rem;
}
article .today-lessons div:nth-child(4) {
  right: 36rem;
}

article .today-lessons .group-element-select {
  position: absolute;
  background-color: rgba(253, 123, 56, 0.2);
}
label {
    color: #fd7b38 !important;
    font-weight: bold !important;
}
</style>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

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
$('.group-element').click(function() {

  // event soon ----------------



  // ---------------------------
  $('.group-element').removeClass('group-element-select');
  $(this).addClass('group-element-select');
})
  $('#latepaystable').DataTable({
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
  $('#absentrepeattable').DataTable({
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

  $('.delete-button').click(function() {
   var  selectedRow = $(this).closest('tr');
    var idSelectedRow = $(this).closest('tr').find(".hide_column").text();
    console.log(idSelectedRow);
    $('.confirm-delete').click(function() {
     selectedRow.remove();
      // $('#deletestudent').hide();
    })
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


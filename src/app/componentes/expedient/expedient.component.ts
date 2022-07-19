import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/interfaces/doctor.interface';
import { AuthService } from 'src/services/authe/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-expedient',
  templateUrl: './expedient.component.html',
  styleUrls: ['./expedient.component.css'],
})
export class ExpedientComponent implements OnInit {
  private readonly mainURL = `${environment.apiURL}`;
  private readonly localURL = `${environment.localURL}`;
  user: Doctor | any;

  constructor(private auth: AuthService, private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(this.localURL + 'api/login', { withCredentials: true })
      .subscribe((res: any) => {
        console.log(res);
        this.user = res.user;
      });
  }
}

/* <script>
  $(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    var actions = $("table td:last-child").html();
    // Append table with add row form on add new button click
    $(".add-new").click(function () {
      $(this).attr("disabled", "disabled");
      var index = $("table tbody tr:last-child").index();
      var row = '<tr>' +
        '<td><input type="text" class="form-control" name="name" id="name"></td>' +
        '<td><input type="text" class="form-control" name="department" id="department"></td>' +
        '<td><input type="text" class="form-control" name="phone" id="phone"></td>' +
        '<td>' + actions + '</td>' +
        '</tr>';
      $("table").append(row);
      $("table tbody tr").eq(index + 1).find(".add, .edit").toggle();
      $('[data-toggle="tooltip"]').tooltip();
    });
    // Add row on add button click
    $(document).on("click", ".add", function () {
      var empty = false;
      var input = $(this).parents("tr").find('input[type="text"]');
      input.each(function () {
        if (!$(this).val()) {
          $(this).addClass("error");
          empty = true;
        } else {
          $(this).removeClass("error");
        }
      });
      $(this).parents("tr").find(".error").first().focus();
      if (!empty) {
        input.each(function () {
          $(this).parent("td").html($(this).val());
        });
        $(this).parents("tr").find(".add, .edit").toggle();
        $(".add-new").removeAttr("disabled");
      }
    });
    // Edit row on edit button click
    $(document).on("click", ".edit", function () {
      $(this).parents("tr").find("td:not(:last-child)").each(function () {
        $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
      });
      $(this).parents("tr").find(".add, .edit").toggle();
      $(".add-new").attr("disabled", "disabled");
    });
    // Delete row on delete button click
    $(document).on("click", ".delete", function () {
      $(this).parents("tr").remove();
      $(".add-new").removeAttr("disabled");
    });
  });
</script> */

angular.module('realSalaryApp', [])
   .controller('SalaryController', function () {
       var vm = this;
       vm.realSalary = 0;

       vm.calculate = function () {
           var workDays = 52 * 5 - parseInt(vm.vacationDays)
           var totalSalary = parseInt(vm.annualSalary) * (1 + (parseInt(vm.rrspMatch) / 100)) + parseInt(vm.bonus)
           vm.realSalary = totalSalary / (workDays * parseInt(vm.workHoursDay))
       };

   });
angular.module('realSalaryApp', [])
   .controller('SalaryController', function () {
       var vm = this;
       vm.realSalary = 0;

       vm.calculate = function () {
           var workDays = 52 * 5 - vm.vacationDays
           var totalSalary = vm.annualSalary * (1 + (vm.rrspMatch / 100))
           vm.realSalary = totalSalary / (workDays * vm.workHoursDay)
       };

   });
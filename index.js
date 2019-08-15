angular.module('realSalaryApp', [])
   .controller('SalaryController', function () {
       var vm = this;
       vm.realSalary = 0;

       vm.calculate = function () {
           var workDays = 52 * 5 - parseFloat(vm.vacationDays)
           var totalSalary = parseFloat(vm.annualSalary) * (1 + (parseFloat(vm.rrspMatch) / 100)) + parseFloat(vm.bonus)
           vm.realSalary = totalSalary / (workDays * parseFloat(vm.workHoursDay))
       };

   });
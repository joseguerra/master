select count(*) from OPERACIONSERVICIOS;

select count(*) from ORDENSERVICIO where dteentrega >= to_date('01/10/2016','dd/mm/yyyy')

select count(*) FROM ORDENSERVICIOMANOOBRA 
where numcodigoos in ( select numcodigoos from ORDENSERVICIO where dteentrega >= to_date('01/10/2016','dd/mm/yyyy') )

select count(*) from ORDENSERVICIOREPUESTO
where numcodigoos in ( select numcodigoos from ORDENSERVICIO where dteentrega >= to_date('01/10/2016','dd/mm/yyyy') )

select count(*) from MANOOBRAOSDETREI
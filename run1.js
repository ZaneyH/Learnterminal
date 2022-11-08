function write (string){
    process.stdout.write(string);
}
import chalk from 'chalk';
import boxen from 'boxen';

write(chalk.blue.bgGreen('Hello chalk'));

for(let i=0; i<16; i++){
    for(let j=0; j<16; j++){
        let color = (i*j).toString()
        write(chalk.ansi256(color)(color.padEnd(4,' ')));
    }
    write('\n');
}

write(boxen(chalk.magenta.bgCyan.italic('freddie dredd'), {
    padding: 2,
    margin: 5,
    borderStyle:'doubleSingle',
    title:'MM21',
    titleAlignment:'center'
    
}));
write(boxen(chalk.blue.bgGreen.bold('freddie dredd'), {
    padding: 3,
    margin: 1
}));
write(boxen(chalk.blue.bgGreenBright.underline('freddie dredd'), {
    padding: 2,
    margin: 2
}));
write(boxen(chalk.cyan.bgBlackBright.strikethrough('freddie dredd'), {
    padding: 1,
    margin: 1
}));
write(boxen(chalk.blue.bgRedBright.dim('freddie dredd'), {
    padding: 1,
    margin: 6
}));
write(boxen(chalk.red.bgBlue.hidden('freddie dredd'), {
    padding: .09,
    margin: .1,
   borderStyle:'arrow',
   title:'Henri',
   titleAlignment:'center'
}));
 


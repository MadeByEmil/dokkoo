var searchIndex = JSON.parse('{\
"dokkoo":{"doc":"","i":[[3,"Document","dokkoo","User-specified data regarding a Mokk File",null,null],[12,"frontmatter","","A File\'s contextual data, represented as YAML at the …",0,null],[12,"content","","A File\'s contents following the frontmatter",0,null],[12,"permalink","","Data representing the output path of a File This is …",0,null],[12,"date","","A File\'s date-time metadata, formatted per RFC 3339 spec. …",0,null],[3,"Page","","Generated data regarding a Mokk File",null,null],[12,"document","","A Page\'s Document",1,null],[12,"directory","","Path to the File, not including the File itself",1,null],[12,"name","","The File\'s base filename",1,null],[12,"url","","",1,null],[12,"year","","Year with four digits",1,null],[12,"short_year","","Year without the century (00..99)",1,null],[12,"month","","Month (01..12)",1,null],[12,"i_month","","Month without leading zeros",1,null],[12,"short_month","","Three-letter month abbreviation, e.g. “Jan”",1,null],[12,"long_month","","Full month name, e.g. “January”",1,null],[12,"day","","Day of the month (01..31)",1,null],[12,"i_day","","Day of the month without leading zeros",1,null],[12,"y_day","","Ordinal day of the year, with leading zeros. (001..366)",1,null],[12,"w_year","","Week year which may differ from the month year for up to …",1,null],[12,"week","","Week number of the current year, starting with the first …",1,null],[12,"w_day","","Day of the week, starting with Monday (1..7)",1,null],[12,"short_day","","Three-letter weekday abbreviation, e.g. “Sun”",1,null],[12,"long_day","","Weekday name, e.g. “Sunday”",1,null],[12,"hour","","Hour of the day, 24-hour clock, zero-padded (00..23)",1,null],[12,"minute","","Minute of the hour (00..59)",1,null],[12,"second","","Second of the minute (00..59)",1,null],[5,"get_permalink","","Returns an expanded permalink value, for when shorthand …",null,[[],["string",3]]],[5,"split_frontmatter","","Returns a tuple with a File\'s frontmatter and contents, …",null,[[["string",3]]]],[5,"get_page_object","","Returns an object with a Page\'s context.",null,[[["hashmap",3],["string",3]],["page",3]]],[5,"get_contexts","","Returns a Liquid object with a Page\'s Liquid contexts.",null,[[["option",4],["page",3],["hashmap",3],["hashmap",3]],["object",3]]],[5,"render","","Returns a String with a &str\'s File rendered.",null,[[["page",3],["hashmap",3]],["string",3]]],[5,"compile","","Compiles a Mokk File; renders, makes note of the File …",null,[[["string",3],["vec",3],["hashmap",3],["page",3]]]],[5,"render_layouts","","Render the layout(s) of a post recursively (should a …",null,[[["page",3],["hashmap",3],["page",3]],["string",3]]],[5,"render_snippets","","Render all snippets throughout a \'.mokkf\' file together",null,[[["page",3],["hashmap",3]],["string",3]]],[5,"render_snippet","","Render an individual snippet call",null,[[["string",3],["page",3],["hashmap",3],["hashmap",3]],["string",3]]],[5,"get_snippet_call_portions","","Get the portions of a snippet call; seperate the call by …",null,[[["string",3]],[["vec",3],["string",3]]]],[5,"get_snippet_keys","","Get the keys of a snippet call\'s arguments, should they …",null,[[],[["vec",3],["string",3]]]],[5,"get_snippet_values","","Get the values of a snippet call\'s arguments, should they …",null,[[],[["vec",3],["string",3]]]],[5,"render_markdown","","Render Markdown as HTML",null,[[["string",3]],["string",3]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"vzip","","",0,[[]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"vzip","","",1,[[]]],[11,"clone","","",0,[[],["document",3]]],[11,"clone","","",1,[[],["page",3]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"serialize","","",0,[[],["result",4]]],[11,"serialize","","",1,[[],["result",4]]],[11,"deserialize","","",0,[[],["result",4]]]],"p":[[3,"Document"],[3,"Page"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);
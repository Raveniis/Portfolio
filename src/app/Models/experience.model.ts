type EndDate = Date | 'current'

interface Experience {
     Position: string
     Company: string 
     start_date: Date 
     end_date: EndDate 
     description: string
}
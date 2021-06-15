const buttonSQL = {
    SELECT_FROM_WHERE:
        `SELECT * 
        FROM "STUDENT" AS S 
        WHERE S."SCHOOL" ='國立成功大學'; `,
    DELETE:
        `DELETE FROM "REQUIREMENT" 
        WHERE "ID"='1' `,
    INSERT:
        `INSERT INTO "STUDENT" 
        VALUES('國立清華大學', '經濟學系', '詹', '雯雯', '0928111737', 'U38472938', '女'); `,
    UPDATE:
        `UPDATE "HOUSE"
        SET "PRICE" = "PRICE" * 1.1 
        WHERE "HNUMBER" IN(
            SELECT "HNUMBER" 
            FROM "HOUSEOWNER" 
            WHERE "FNAME" = '陳' AND "LNAME" = '雁行'
        );`,
    IN:
        `SELECT *
        FROM "HOUSE"
        WHERE "HNUMBER" IN(
            SELECT "HNUMBER" 
            FROM "HOUSEOWNER" 
            WHERE "FNAME" = '陳' AND "LNAME" = '雁行'
        );`,
    NOT_IN:
        `SELECT  "HNUMBER", "COMMENT", "STAR" 
        FROM "COMMENT"  
        WHERE "HNUMBER" NOT IN (
            SELECT "HNUMBER" 
            FROM "HOUSEOWNER" AS H 
            WHERE NOT EXISTS (
                SELECT * 
                FROM "HOUSE" AS E 
                WHERE H."HNUMBER"=E."HNUMBER" AND E."CITY"='台南市'
            )
        ); `,
    EXISTS:
        `SELECT "FNAME", "LNAME", "SCHOOL"
        FROM "STUDENT" AS S 
        WHERE EXISTS(SELECT * FROM "CONTRACT" AS C WHERE S."ID" = C."ID");`,
    NOT_EXISTS:
        `SELECT "FNAME", "LNAME", "SCHOOL"
        FROM "STUDENT" AS S 
        WHERE NOT EXISTS(
            SELECT * 
            FROM "CONTRACT" AS C 
            WHERE S."ID" = C."ID"
        );` ,  
    COUNT:
        `SELECT COUNT(*)
        FROM "HOUSE"
        WHERE "CITY" = '台南市';`,
    SUM:
        `SELECT SUM("PRICE")
        FROM "HOUSE" AS H
        WHERE H."HNUMBER" IN (
            SELECT "HNUMBER" 
            FROM "CONTRACT" 
            WHERE "HNUMBER" IN (
                SELECT "HNUMBER" 
                FROM "HOUSEOWNER" 
                WHERE "FNAME"='陳' AND "LNAME"='雁行'
            )
        );`,
    MAX:
        `SELECT MAX("BUDGET")
        FROM "REQUIREMENT"
        WHERE "CITY" = '台南市';`,
    MIN:
        `SELECT MIN("BUDGET")
        FROM "REQUIREMENT"    
        WHERE "CITY" = '台南市';`,  
    AVG:
        `SELECT AVG("PRICE")
        FROM "HOUSE"
        WHERE "CITY" = '台南市';`,
    HAVING:
        `SELECT H."FNAME", H."LNAME", AVG("STAR")
        FROM "HOUSEOWNER" AS H, "COMMENT" AS C
        WHERE H."HNUMBER" = C."HNUMBER"
        GROUP BY H."HNUMBER", H."LNAME"
        HAVING AVG("STAR") < 3`
}


export { buttonSQL as default }